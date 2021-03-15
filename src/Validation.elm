module Validation exposing (..)

import Errors
import Formula exposing (Formula(..))
import Formula.Signed exposing (Signed(..))
import Helpers.Parser
import Parser
import Tableau exposing (..)
import Term exposing (Term(..))
import Zipper
import Validation.Common exposing (..)
import Validation.Rules.Alpha
import Validation.Rules.Beta
import Validation.Rules.Delta
import Validation.Rules.Gamma
import Validation.Rules.Leibnitz
import Validation.Rules.Reflexivity
import Validation.Rules.ModusPonens
import Validation.Rules.ModusTolens
import Validation.Rules.Cut
import Validation.Rules.HS
import Validation.Rules.DS
import Validation.Rules.NCS
import Validation.Rules.ECDF
import Validation.Rules.ECDT
import Validation.Rules.ESFF
import Validation.Rules.ESFT
import Validation.Rules.ESTF
import Validation.Rules.ESTT
import Term
import Dict
import Set



-- error : x -> Result x a -> x
-- error def r =
--     case r of
--         Err x ->
--             x
--         Ok _ ->
--             def
-- (<++) : ( List Problem, Zipper.Zipper ) -> (Zipper.Zipper -> List Problem) -> ( List Problem, Zipper.Zipper )
-- (<++) ( lp, z ) f =
--     ( lp ++ f z, z )
-- (<++?) : ( List Problem, Zipper.Zipper ) -> (Zipper.Zipper -> Result (List Problem) a) -> ( List Problem, Zipper.Zipper )
-- (<++?) ( lp, z ) f =
--     ( lp ++ error [] (f z), z )


isCorrectTableau : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isCorrectTableau z =
    Errors.merge2 (always2 z)
        (isCorrectNode z)
        (List.foldl
            (Errors.merge2 (always2 z))
            (Ok z)
            (List.map isCorrectTableau (Zipper.children z))
        )


isValidNode : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isValidNode z =
    Errors.merge4 (always4 z)
        (isValidFormula z)
        (isValidNodeRef z)
        (isValidSubstitution z)
        (areValidCloseRefs z)


isCorrectNode : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isCorrectNode z =
    isValidNode z
        |> Result.andThen
            (\_ ->
                Errors.merge2 second
                    (isCorrectRule z)
                    (areCorrectCloseRefs z)
            )


{-| Just for the formula dislplay -- don't check the ref for syntax
-}
isCorrectFormula : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isCorrectFormula z =
    isValidFormula z
        |> Result.andThen isCorrectRule


isValidFormula : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isValidFormula z =
    z |> Zipper.zNode |> .formula |> Result.mapError (parseProblem z) |> Result.map (always z)


areTermsDistinct : Term.Substitution -> Bool
areTermsDistinct subst =
    let 
        terms = Dict.values subst
    in
    List.length terms == Set.size (Set.fromList (List.map Term.toString terms))


isValidSubstitution : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isValidSubstitution z =
    if (Zipper.up z) == z then
        Ok z
    else    
        case Zipper.zSubstitution (Zipper.up z) of
            Just subst ->
                subst |> .parsedSubst 
                |> Result.mapError (\_ -> syntaxProblem z "Wrong form of substitution") 
                |> Result.map  (\parsedS -> Dict.union parsedS (implicitSubst parsedS z))
                |> Result.andThen (checkPredicate areTermsDistinct 
                    (syntaxProblem z "Substituted terms must be distict"))
                |> Result.map (always z)

            Nothing ->
                Ok z


isValidNodeRef : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isValidNodeRef z =
    case List.length (Zipper.zNode z).references of
        0 ->
            Ok z

        1 ->
            isValidRef "The" (Zipper.zFirstRef z) z

        2 ->
            Errors.merge2 (always2 z)
                (isValidRef "The first" (Zipper.zFirstRef z) z)
                (isValidRef "The second" (Zipper.zSecondRef z) z)

        _ ->
            Err (syntaxProblem z "There are too many references.")


areValidCloseRefs : Zipper.Zipper -> Result (List Problem) Zipper.Zipper
areValidCloseRefs z =
    case (Zipper.zTableau z).ext of
        Closed r1 r2 ->
            Errors.merge2 (always2 z)
                (isValidCloseRef "First close" r1 z)
                (isValidCloseRef "Second close" r2 z)

        _ ->
            Ok z


isValidCloseRef : String -> Ref -> Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isValidCloseRef str r z =
    r.up
        |> Result.fromMaybe (syntaxProblem z (str ++ " reference is invalid."))
        |> Result.map (always z)


isValidRef : String -> Ref -> Zipper.Zipper -> Result (List Problem) Zipper.Zipper
isValidRef str r z =
    r.up
        |> Result.fromMaybe (syntaxProblem z (str ++ " reference is invalid."))
        |> Result.andThen
            (checkPredicate (\up -> up /= 0)
                (semanticsProblem z (str ++ " reference is pointing on this formula"))
            )
        |> Result.map (always z)


areCorrectCloseRefs :
    Zipper.Zipper
    -> Result (List Problem) Zipper.Zipper
areCorrectCloseRefs z =
    case (Zipper.zTableau z).ext of
        Closed r1 r2 ->
            areCloseRefsComplementary r1 r2 z |> Result.map (always z)

        _ ->
            Ok z


parseProblem : Zipper.Zipper -> List Parser.DeadEnd -> List Problem
parseProblem z =
    Helpers.Parser.deadEndsToString >> syntaxProblem z


validateFormula : Zipper.Zipper -> Result (List Problem) (Signed Formula)
validateFormula z =
    z |> Zipper.zNode |> .formula |> Result.mapError (parseProblem z)


validateRef : String -> Ref -> Zipper.Zipper -> List Problem
validateRef str r z =
    case r.up of
        Nothing ->
            syntaxProblem z str

        _ ->
            []


validateNodeRef : Zipper.Zipper -> List Problem
validateNodeRef z =
    case List.length (Zipper.zNode z).references of
        0 ->
            []

        1 ->
            validateRef "Invalid reference" (Zipper.zFirstRef z) z

        2 ->
            validateRef "Invalid first reference" (Zipper.zFirstRef z) z
                ++ validateRef "Invalid second reference" (Zipper.zSecondRef z) z

        _ ->
            syntaxProblem z "There are too many references."


areCloseRefsComplementary :
    Ref
    -> Ref
    -> Zipper.Zipper
    -> Result (List Problem) Zipper.Zipper
areCloseRefsComplementary r1 r2 z =
    Errors.merge2 Formula.Signed.isComplementary
        (checkReffedFormula "First close" r1 z)
        (checkReffedFormula "Second close" r2 z)
        |> Result.andThen (resultFromBool z (semanticsProblem z "Closing formulas are not complementary."))


validateUnary : UnaryExtType -> Zipper.Zipper -> Result (List Problem) Zipper.Zipper
validateUnary extType =
    case extType of
        Alpha ->
            Validation.Rules.Alpha.validate

        Refl ->
            Validation.Rules.Reflexivity.validate

        Leibnitz  ->
            Validation.Rules.Leibnitz.validate

        MP ->
            Validation.Rules.ModusPonens.validate

        MT ->
            Validation.Rules.ModusTolens.validate

        HS ->
            Validation.Rules.HS.validate

        DS ->
            Validation.Rules.DS.validate

        NCS ->
            Validation.Rules.NCS.validate

        ESFF ->
            Validation.Rules.ESFF.validate

        ESFT ->
            Validation.Rules.ESFT.validate

        ESTF ->
            Validation.Rules.ESTF.validate

        ESTT ->
            Validation.Rules.ESTT.validate


validateUnaryWithSubst : UnaryWithSubstExtType -> Zipper.Zipper -> Result (List Problem) (Tableau, Zipper.BreadCrumbs)
validateUnaryWithSubst extType =
    case extType of
        Gamma ->    
            Validation.Rules.Gamma.validate
        
        Delta ->
            Validation.Rules.Delta.validate


validateBinary : BinaryExtType -> Zipper.Zipper -> Zipper.Zipper -> Result (List Problem) Zipper.Zipper
validateBinary extType =  
    case extType of
        Beta ->
            Validation.Rules.Beta.validate

        Cut ->
            Validation.Rules.Cut.validate

        ECDF ->
            Validation.Rules.ECDF.validate

        ECDT ->
            Validation.Rules.ECDT.validate


isCorrectRule :
    ( Tableau, Zipper.BreadCrumbs )
    -> Result (List Problem) ( Tableau, Zipper.BreadCrumbs )
isCorrectRule (( t, bs ) as z) =
    case bs of
        (Zipper.UnaryCrumb Alpha _) :: _ ->
            case t.node.references |> List.isEmpty of
                True ->
                    -- This is a premise
                    Ok z

                False ->
                    Validation.Rules.Alpha.validate z

        (Zipper.UnaryCrumb extType _ ) :: _ ->
            (validateUnary extType) z

        (Zipper.UnaryCrumbWithSubst extType _ _ ) :: _ ->
            (validateUnaryWithSubst extType) z

        (Zipper.BinaryLeftCrumb extType _ _ ) :: _ ->
            validateLeft (validateBinary extType) z

        (Zipper.BinaryRightCrumb extType _ _ ) :: _ ->
            validateRight (validateBinary extType) z

        [] ->    
            Ok z



{- vim: set sw=2 ts=2 sts=2 et :s -}

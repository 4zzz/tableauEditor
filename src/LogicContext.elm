module LogicContext exposing (..)

import Formula exposing (Formula, toString)
import Formula.Parser exposing (parse)
import List exposing (map)
import Parser exposing (deadEndsToString)
import Result.Extra exposing (combine)
import Set exposing (Set)
import List exposing (filter)


type alias ContextData =
    { axioms : List String
    , proovedTheorems : List String
    , newTheorem : String
    }


type alias LogicContext =
    { newTheorem : String
    , axiomsLookup : Set String
    , proovedTheoremsLookup : Set String
    }


type FormulaCategory
    = Axiom
    | NewTheorem
    | ProovedTheorem


processFormula : String -> Result String String
processFormula formula =
    case parse formula of
        Ok f ->
            Ok <| toString f

        Err e ->
            Err ("Formula parsing failed (Formula:" ++ formula ++ ", Error: " ++ deadEndsToString e ++ ")")




processFormulas : List String -> Result String (Set String)
processFormulas axioms =
    case combine (map processFormula axioms) of
        Ok formulas ->
            Ok <| Set.fromList formulas

        Err e ->
            Err <| "Axiom parsing failed. (" ++ e ++ ")"


createContext : ContextData -> Result String LogicContext
createContext d =
    Result.map3
        (\newTheorem ->
            \axiomsLookup ->
                \theoremsLookup ->
                    LogicContext newTheorem axiomsLookup theoremsLookup
        )
        (processFormula d.newTheorem)
        (processFormulas d.axioms)
        (processFormulas d.proovedTheorems)


contextFormulaCategories : LogicContext -> Formula -> List FormulaCategory
contextFormulaCategories ctx f =
    let
        isAxiom =
            Set.member (toString f) ctx.axiomsLookup

        isNewTheorem =
            ctx.newTheorem == toString f

        isProovedTheorem =
            Set.member (toString f) ctx.proovedTheoremsLookup

        results = [(isAxiom, Axiom), (isNewTheorem, NewTheorem), (isProovedTheorem, ProovedTheorem)]
    in
    map (\(_, r) -> r) <| filter (\(b,_) -> b) results

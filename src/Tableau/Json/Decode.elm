module Tableau.Json.Decode exposing (tableau, decode)
import Tableau
import Json.Decode exposing (..)

{- unfortunately we need to parse the refs
   in a second pass
-}

mkRef : String -> Tableau.Ref
mkRef str = { str = str, up = Nothing }

ref =
  map mkRef string

closed =
  map2 (,)
    (index 0 ref)
    (index 1 ref)

node =
  map3 Tableau.Node
    (field "num" int)
    (field "text" string)
    (field "ref" ref)

leaf =
  map2 Tableau.Leaf
    (field "node" node)
    (maybe (field "closed" closed))

alpha =
  map2 Tableau.Alpha
    (field "node" node)
    (field "child" (Json.Decode.lazy (\_ -> tableau)))

beta =
  map3 Tableau.Beta
    (field "node" node)
    (field "leftChild" (lazy (\_ -> tableau)))
    (field "rightChild" (lazy (\_ -> tableau)))

tblTypeDecoder : String -> Decoder Tableau.Tableau
tblTypeDecoder typ =
  case typ of
    "leaf" -> leaf
    "alpha" -> alpha
    "beta" -> beta
    _ -> fail ("'" ++ typ ++ "' is not a correct tableau node type")


-- I have no idea why this also needs to be lazy
-- (in addition to the calls in alpha / beta)
tableau : Decoder Tableau.Tableau
tableau =
  lazy (\_ ->
    (field "type" string)
    |> andThen tblTypeDecoder
  )

decode = decodeString tableau >> Result.map reRefTableau


reRefTableau : Tableau.Tableau -> Tableau.Tableau
reRefTableau t =
  t
  |> Tableau.zipper
  |> Tableau.zWalkPost reRef
  |> Tableau.zTableau

reRef : Tableau.Zipper -> Tableau.Zipper
reRef z =
  z
  |> Tableau.setRef (z |> Tableau.zNode |> .ref |> .str)
  |> Tableau.modify
    (\t ->
      case t of
        Tableau.Leaf n (Just (r1, r2)) ->
          Tableau.Leaf n ( Just
            ( z |> Tableau.getRef r1.str
            , z |> Tableau.getRef r2.str
            )
          )
        _ -> t
    )

{- vim: set sw=2 ts=2 sts=2 et : -}
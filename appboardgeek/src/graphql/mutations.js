import { gql, useMutation } from "@apollo/client";

export const CREATE_BOARDGAME = GQL`
mutation Mutation($boardgame: BoardgameInput!) {
    addBoardgame(boardgame: $boardgame) {
      status
      message
      data {
        ... on Boardgame {
          id: $id
          title: $title
          publisher: $publisher
          language: $language
          dificulty: $difficulty
          min_players: $min_players
          max_players: $max_players
          price: $price
          thumbnail: $thumbnail
        }
      }
    }
  }
`
import { gql } from '@apollo/client';

export const GET_BOARDGAMELIST_QUERY = gql`
query {
      boardgameList{
          id
          title
          thumbnail
          price
      }
  }
`

export const GET_PRODUCT_QUERY = gql`
    query Query($findBoardgameId: String!) {
    findBoardgame(id: $findBoardgameId) {
        status
        message
        data {
        ... on Boardgame {
            id
            title
            publisher
            language
            dificulty
            thumbnail
            description
            min_players
            max_players
            play_time
            price
            }
        }
    }
}
`
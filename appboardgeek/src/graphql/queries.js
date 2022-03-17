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

export const GET_BOARDGAME_QUERY = gql`
    query ($id: String!){
    findBoardgame(id: $id) {
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
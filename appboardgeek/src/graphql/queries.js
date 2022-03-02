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
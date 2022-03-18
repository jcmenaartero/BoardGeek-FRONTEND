import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import Card from 'react-bootstrap/Card'

export const GET_PRODUCT_QUERY = gql`
    query Query($findBoardgameId: String!) {
    findBoardgame(id: id) {
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

export function Product() {
    const {id} = useParams()
    const {data, error, loading} = useQuery(GET_PRODUCT_QUERY)
    console.log({id})
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data)

    return(
        data.findBoardgame.map(boardgame => {
            return(
        <Card className="productCard" key={boardgame.id}>
            <Card.Img variant="top" src={boardgame.thumbnail} className="boardgameImage" />
            <Card.Body>
            <Card.Title>{boardgame.title}</Card.Title>
        </Card.Body>
    </Card>
            )
            })
    )
}
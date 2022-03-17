import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_QUERY } from '../../graphql/queries';

import Card from 'react-bootstrap/Card'

export function Product() {
    const {data, error, loading} = useQuery(GET_PRODUCT_QUERY)

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data)

    return(
        data.findBoardgame.map(boardgame => {
            return(
        <Card className="productCard">
        <Card.Img variant="top" src={boardgame.thumbnail} className="boardgameImage" />
        <Card.Body>
        <Card.Title>{boardgame.title}</Card.Title>
        </Card.Body>
    </Card>
            )
            })
    )
}
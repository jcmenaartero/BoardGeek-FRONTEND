import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_BOARDGAMELIST_QUERY } from '../../graphql/queries';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const BoardgameList = () => {
  
    const {data, error, loading} = useQuery(GET_BOARDGAMELIST_QUERY)

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data)

    const cardBoardgames = () => {
        return(
            data.boardgameList.map(boardgame => {
                return(
                    <Col key={boardgame.id}>
                        <Card  className="boardgameCard">
                            <Card.Img variant="top" src={boardgame.thumbnail} className="boardgameImage" />
                            <Card.Body>
                            <Card.Title>{boardgame.title}</Card.Title>
                            <Button variant="primary"><i className="bi bi-cart-fill"></i>  {boardgame.price} $</Button>
                            </Card.Body>
                        </Card>
                    </Col>  
                )
            })
        )
    }

    return (
    <Row xs={1} sm={2} md={3} xl={4} className="g-4">
            {cardBoardgames()}
    </Row>
  )
}

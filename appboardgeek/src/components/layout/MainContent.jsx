import React from 'react'
import Container from 'react-bootstrap/Container'
import { BoardgameList } from '../boardgames/BoardgameList'


export const MainContent = () => {
  return (
    <Container>
        <BoardgameList />
    </Container>
  )
}

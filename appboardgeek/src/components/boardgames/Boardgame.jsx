import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_BOARDGAME_QUERY } from '../../graphql/queries';
import { useParams } from "react-router-dom";
import Figure from 'react-bootstrap/Figure'


export function Boardgame() {
    const { id } = useParams();
    const {data, error, loading} = useQuery(GET_BOARDGAME_QUERY, {
        variables: {id: id}
    })

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data)

    const Boardgamedetails = data.findBoardgame.data

    return(
        <div className='boardgameDetailsBox'>
            <Figure className='boardgameDetailsFigure'>
            <Figure.Image
                minwidth={250}
                minheight={280}
                alt="171x180"
                src={Boardgamedetails.thumbnail}
            />
            </Figure>
            <div className='boardgameDetails'>
                <h2>{Boardgamedetails.title}</h2>
                <span>Editor: {Boardgamedetails.publisher}</span>
                <span>Idioma: {Boardgamedetails.language}</span>
                <span>Complejidad: {Boardgamedetails.dificulty}</span>
                <span>Jugadores: {Boardgamedetails.min_players} - {Boardgamedetails.max_players}</span>
                <span>Duración: {Boardgamedetails.play_time}</span>
                <span>Precio: {Boardgamedetails.price}$</span>
            </div>
            <p className='boardgameDetailsDescription'> Descripción: <br></br> {Boardgamedetails.description}</p>
        </div>
    )
}
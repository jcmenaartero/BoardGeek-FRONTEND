import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARDGAME = gql`
mutation Mutation($boardgame: BoardgameInput!) {
    addBoardgame(boardgame: $boardgame) {
      status
      message
      data {
        ... on Boardgame {
          id: id
          title: title
          publisher: publisher
          language: language
          dificulty: dificulty
          thumbnail: thumbnail
          description: description
          min_players: min_players
          max_players: max_players
          play_time: play_time
          price: price
        }
      }
    }
  }
`

export const Insert = () => {
    const [id, setID] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [publisher, setPublisher] = useState('')
    const [language, setLanguage] = useState('')
    const [dificulty, setDificulty] = useState('')
    const [min_players, setMinPlayers] = useState('')
    const [max_players, setMaxPlayers] = useState('')
    const [play_time, setPlaytime] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState('')

    const [ createBoardgame ] = useMutation(CREATE_BOARDGAME)

    const handleSubmit = e => {
        e.preventDefault()

        createBoardgame({ 
            variables: { 
                boardgame: {
                    id,
                    title,
                    publisher,
                    language,
                    dificulty,
                    min_players,
                    max_players,
                    price,
                    thumbnail 
                },
            },
        });

        setID('')
        setTitle('')
        setDescription('')
        setPublisher('')
        setLanguage('')
        setDificulty('')
        setMinPlayers('')
        setMaxPlayers('')
        setPlaytime('')
        setPrice('')
        setThumbnail('')
    }



    return (
        <div style={{width:"80%", margin:"0 auto", marginTop:"15px"}}>
            <div style={{width:"50%", backgroundColor:"lightgrey", margin:"0 auto", padding:"10px",}}>
                <h1>Insertar un juego de mesa</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label><b>ID</b></label>
                            <input placeholder="ID" value={id} onChange={ evt => setID(evt.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label><b>Titulo del juego</b></label>
                            <input placeholder="Título" value={title} onChange={ evt => setTitle(evt.target.value)}/>
                        </div>
                        <div className="form-group col-md-6" style={{height: "100px"}}>
                            <label><b>Descripción</b></label>
                            <input  style={{height: "100%"}} placeholder="Descripción" value={description} onChange={ evt => setDescription(evt.target.value)}/>
                        </div>
                        <div className="form-group col-md-6" style={{marginTop: "20px"}}>
                            <label><b>Publisher</b></label>
                            <input placeholder="Publisher" value={publisher} onChange={ evt => setPublisher(evt.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label><b>Idioma</b></label>
                            <input placeholder="Idioma" value={language} onChange={ evt => setLanguage(evt.target.value)}/>
                        </div>
                        <Form.Select style={{ marginTop: "15px" }}>
                            <option>Dificultad</option>
                            <option value={dificulty} onChange={ evt => setDificulty("Sencillo")}>Sencillo</option>
                            <option value={dificulty} onChange={ evt => setDificulty("Moderado")}>Moderado</option>
                            <option value={dificulty} onChange={ evt => setDificulty("Complejo")}>Complejo</option>
                        </Form.Select>
                    </div>
                    <div className="form-group col-md-3">
                            <label><b>Jugadores mínimos</b></label>
                            <input value={min_players} onChange={ evt => setMinPlayers(evt.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                            <label><b>Jugadores máximos</b></label>
                            <input value={max_players} onChange={ evt => setMaxPlayers(evt.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                            <label><b>Precio</b></label>
                            <input value={price} onChange={ evt => setPrice(evt.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                            <label><b>Tiempo de juego</b></label>
                            <input value={play_time} onChange={ evt => setPlaytime(evt.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                            <label><b>Enlace de la portada</b></label>
                            <input value={thumbnail} onChange={ evt => setThumbnail(evt.target.value)}/>
                    </div>
                    <button style={{width:"50%", margin:"0 auto", marginTop:"20px"}}>Publicar</button>
                </form>
            </div>
        </div>
    )
}
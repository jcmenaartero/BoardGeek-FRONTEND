import React from 'react';
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

export function NotFound() {
      return (
        <Alert variant="warning" className="notFoundItem">
          <Alert.Heading>ERROR 404. ¡Página no encontrada!</Alert.Heading>
          <p>
            Lo sentimos, lamentablemente esta página no existe o ha sido eliminada. :(
          </p>
          <Button variant="warning" href='/'>Volver al Inicio</Button>{' '}
        </Alert>
      );
    }

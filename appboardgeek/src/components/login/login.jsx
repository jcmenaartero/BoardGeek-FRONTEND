import React from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FloatingLabel } from 'react-bootstrap';


export function Login() {

return (
<div className='login'>
  <FloatingLabel
    controlId="floatingInput"
    label="Correo electrónico"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="Email address" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Contraseña">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>

  <Button variant="warning">Entrar</Button>{' '}
</div>
);
}
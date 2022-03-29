import "./styles.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function Contato() {
  return (

<div className="content-projects" id="contato">
 <div class="wrapper">
   <h2 className="mb-4">Entre em contato</h2>
 <Form>
   <Form.Group className="mb-4" controlId="formBasicEmail">
     <Form.Label>Email</Form.Label>
     <Form.Control type="email" placeholder="Informe seu email" />

   </Form.Group>

   <Form.Group className="mb-4" controlId="formBasicPassword">
     <Form.Label>Assunto</Form.Label>
     <Form.Control type="text" placeholder="Informe o assunto" />
   </Form.Group>
   <Button variant="primary" type="submit">
     Enviar
   </Button>
 </Form>
 </div>
</div>
  );
}

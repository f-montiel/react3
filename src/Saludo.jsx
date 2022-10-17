import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Saludo = ({saludo})=>{
    const [msj, setMsj] = useState("");
    let mostrarMensaje = ()=>{
        setMsj("(from changed state)");
    }
    return(
        <Container className="my-5">
            <h1>Hello {saludo + " " + msj}</h1>
            <Button onClick={mostrarMensaje}>Mostrar mensaje</Button>
        </Container>
    );
}

export default Saludo;
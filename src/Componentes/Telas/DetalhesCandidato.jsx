import { Container, Button, Card, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function DetalhesCandidato(props) {
    const [questionamento, setQuestionamento] = useState("");

    const manipularMudanca = (evento) => {
        setQuestionamento(evento.target.value);
    };

    const manipularSubmissao = (evento) => {
        evento.preventDefault();
        const novosQuestionamentos = [...props.candidatoAtual.questionamentos, questionamento];
        props.setcandidatoSEL({
            ...props.candidatoAtual,
            questionamentos: novosQuestionamentos
        });
        setQuestionamento('');//zerar a barra de digitar
    };

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <Button onClick={() => {
                    props.setDetalharCandidato(false);
                }}
                className="mt-1" variant="success">Voltar</Button><br/>
            <Card.Img variant="top" height="300" width="30" style={{ width: '18rem' }} src={props.candidatoAtual.avatar} />
            <p>{"ID: " + props.candidatoAtual.id}</p>
            <p>{"Email: " + props.candidatoAtual.email}</p>
            <p>{"Nome: " + props.candidatoAtual.nome}</p>
            <p>{"Curtidas: " + props.candidatoAtual.curtidas}</p>
            <p>{"Descurtidas: " + props.candidatoAtual.descurtidas}</p>
            <h1>Proposta do candidato:</h1>
            {props.candidatoAtual.propostas.map((proposta) => (
                <p>{proposta}</p>
            ))}
            <br/><br/>
            <Form onSubmit={manipularSubmissao}>
                <Row className="mb-4">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Questionamento</Form.Label>
                        <Form.Control
                            type="text"
                            value={questionamento}
                            onChange={manipularMudanca}
                            placeholder="Digite seu questionamento"
                        />
                    </Form.Group>
                </Row>
                <Row className='mt-2 mb-2'>
                    <Col md={2}>
                        <Button type="submit">Adicionar Questionamento</Button>
                    </Col>
                </Row>
            </Form>
            <h1>Questionamentos ao candidato:</h1>
            {props.candidatoAtual.questionamentos.map((quest) => (
                <p>{quest}</p>
            ))}
        </Container>
    );
}

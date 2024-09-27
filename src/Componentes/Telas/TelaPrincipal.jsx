import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import { listaCandidatos } from "../../dados/candidatos";


export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato] = useState(false);
    const [candidatoSEL, setcandidatoSEL] = useState({
        id: 1,
        email: "",
        nome: "",
        avatar: "",
        propostas: [],
        curtidas: 0,
        descurtidas: 0,
        questionamentos: []
    });

    return (
        <Pagina>
            {detalharCandidato ? (
                <DetalhesCandidato 
                    setDetalharCandidato={setDetalharCandidato}
                    candidatoAtual={candidatoSEL}
                    setcandidatoSEL={setcandidatoSEL}
                />
            ) : (
                <GridCandidatos
                    listaCandidatos={listaCandidatos}
                    setDetalharCandidato={setDetalharCandidato}
                    candidatoAtual={candidatoSEL}
                    setcandidatoSEL={setcandidatoSEL}
                />
            )}
        </Pagina>
    );
}

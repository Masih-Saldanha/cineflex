import { useParams } from "react-router-dom";
import styled from "styled-components";
import ListaDeAssentos from "./ListaDeAssentos";

export default function Sessao() {
    const { idSessao } = useParams();
    console.log(`Renderizei a Sessão: ${idSessao}`)

    return (
        <>
            <TituloSelecaoDeAssento>Selecione o(s) assento(s)</TituloSelecaoDeAssento>
            <ListaDeAssentos idSessao={idSessao} />
        </>
    )
}

const TituloSelecaoDeAssento = styled.h1`
    font-size: 24px;
    text-align: center;
    padding: 43px;
`
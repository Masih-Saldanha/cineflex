import CartazDoFilme from "./CartazDoFilme";
import styled from "styled-components";

export default function Home() {
    console.log("Renderizei Home")

    return (
        <>
            <TituloSelecaoDeFilme>Selecione o filme</TituloSelecaoDeFilme>
            <CartazDoFilme />
        </>
    )
}

const TituloSelecaoDeFilme = styled.h1`
    text-align: center;
    padding: 46px;
`
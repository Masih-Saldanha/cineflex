import styled from "styled-components";

import CartazDoFilme from "./CartazDoFilme";

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
    font-size: 24px;
    text-align: center;
    padding: 43px;
`
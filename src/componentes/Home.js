import styled from "styled-components";
import CartazDoFilme from "./CartazDoFilme";

export default function Home(props) {
    const { dadosRodape, setDadosRodape, setTelaInicial } = props;
    setTelaInicial(true);
    // console.log("Renderizei Home")

    return (
        <>
            <TituloSelecaoDeFilme>Selecione o filme</TituloSelecaoDeFilme>
            <CartazDoFilme
                dadosRodape={dadosRodape}
                setDadosRodape={setDadosRodape}
                setTelaInicial={setTelaInicial}
            />
        </>
    )
}

const TituloSelecaoDeFilme = styled.h1`
    font-size: 24px;
    text-align: center;
    padding: 43px;
`
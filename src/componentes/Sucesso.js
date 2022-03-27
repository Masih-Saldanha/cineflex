import styled from "styled-components";

export default function Sucesso(props) {
    const { dadosRodape, setDadosRodape } = props
    return (
        <>
            <TituloSucesso>Pedido feito com sucesso!</TituloSucesso>
            <CaixaDeDados>
                <h2>Filme e sessão</h2>
                <p>{dadosRodape.filme}</p>
                <p>24/06/2021 {dadosRodape.hora}</p>
            </CaixaDeDados>
            <CaixaDeDados>
                <h2>Ingressos</h2>
                <p>Assento 15</p>
                <p>Assento 15</p>
            </CaixaDeDados>
            <CaixaDeDados>
                <h2>Comprador</h2>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </CaixaDeDados>
            <Container>
                <button>Voltar pra Home</button>
            </Container>
        </>
    )
}

const TituloSucesso = styled.h1`
    color: #247A6B;
    text-align: center;
    padding: 31px 100px;
    font-size: 24px;
    font-weight: 700;
`

const CaixaDeDados = styled.article`
    margin: 29px;
    h2 {
        font-weight: 700;
        font-size: 24px;
        padding-bottom: 10px;
    }
    p {
        font-size: 22px;
        padding-bottom: 5px;
    }
`
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    button {
        width: 225px;
        height: 42px;
        margin-top: 40px;
        border-radius: 3px;
        border: none;
        align-self: center;
        background: #E8833A;
        color: #FFFFFF;
        align-self: center;
    }
`
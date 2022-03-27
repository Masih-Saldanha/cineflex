import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso(props) {
    const { dadosRodape, setDadosRodape, dadosParaEnviar, setDadosParaEnviar, cadeiras, setCadeiras, setTelaInicial } = props;
    setTelaInicial(true);

    return (
        <>
            <TituloSucesso>Pedido feito com sucesso!</TituloSucesso>
            <CaixaDeDados>
                <h2>Filme e sessão</h2>
                <p>{dadosRodape.filme}</p>
                <p>{dadosRodape.data} {dadosRodape.hora}</p>
            </CaixaDeDados>
            <CaixaDeDados>
                <h2>Ingressos</h2>
                {cadeiras.map((cadeira, indice) => {
                    return (
                        <p key={indice}>Assento {cadeira}</p>
                    )
                })}
            </CaixaDeDados>
            <CaixaDeDados>
                <h2>Comprador</h2>
                <p>Nome: {dadosParaEnviar.name}</p>
                <p>CPF: {dadosParaEnviar.cpf[0] + dadosParaEnviar.cpf[1] + dadosParaEnviar.cpf[2]}.{dadosParaEnviar.cpf[3] + dadosParaEnviar.cpf[4] + dadosParaEnviar.cpf[5]}.{dadosParaEnviar.cpf[6] + dadosParaEnviar.cpf[7] + dadosParaEnviar.cpf[8]}-{dadosParaEnviar.cpf[9] + dadosParaEnviar.cpf[10]}</p>
            </CaixaDeDados>
            <Container>
                <Link onClick={() => {
                    setDadosRodape({filme: "", imagem: "", data: "", diaDaSemana: "", hora: ""});
                    setDadosParaEnviar({ ids: [], name: "", cpf: "" });
                    setCadeiras([]);
                }} to="/">
                    <button>Voltar pra Home</button>
                </Link>
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
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ListaDeAssentos from "./ListaDeAssentos";

export default function Sessao(props) {
    const { dadosParaEnviar, setDadosParaEnviar, setEnvioBemSucedido, cadeiras, setCadeiras, setTelaInicial } = props;
    setTelaInicial(false);
    const { idSessao } = useParams();
    let navigate = useNavigate();

    // console.log(`Renderizei a Sessão: ${idSessao}`);

    function enviarDados(e) {
        e.preventDefault()
        if (dadosParaEnviar.name === "") {
            alert("Preencha seu nome");
        } else if (dadosParaEnviar.cpf === "") {
            alert("Preencha seu cpf");
        } else if (dadosParaEnviar.cpf.length !== 11) {
            alert("Seu CPF deve ter apenas 11 dígitos");
        } else if (dadosParaEnviar.ids.length === 0) {
            alert("Escolha ao menos um assento");
        } else {
            // console.log("Enviando: ", dadosParaEnviar);
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dadosParaEnviar);
            promise.then(response => {
                setEnvioBemSucedido(true);
                // console.log("Deu bom o envio", response);
                navigate("/sucesso/")
            });
            promise.catch(response => {
                alert("Algo deu errado, confira se seus dados estão corretos.");
                console.log("Deu ruim o envio", response)
            });
        }
    }

    return (
        <>
            <TituloSelecaoDeAssento>Selecione o(s) assento(s)</TituloSelecaoDeAssento>
            <ListaDeAssentos idSessao={idSessao} dadosParaEnviar={dadosParaEnviar} setDadosParaEnviar={setDadosParaEnviar} cadeiras={cadeiras} setCadeiras={setCadeiras} />
            <Dados onSubmit={enviarDados}>
                <label for="nome">Nome do comprador:</label>
                <input
                    value={dadosParaEnviar.name}
                    onChange={(e) => { setDadosParaEnviar({ ...dadosParaEnviar, name: e.target.value }) }}
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome..."
                />
                <label for="cpf">CPF do comprador:</label>
                <input
                    value={dadosParaEnviar.cpf}
                    onChange={(e) => { setDadosParaEnviar({ ...dadosParaEnviar, cpf: e.target.value }) }}
                    type="number"
                    id="cpf"
                    name="cpf"
                    placeholder="Digite seu CPF..."
                />
                <button type="submit">Reservar assento(s)</button>
            </Dados>
        </>
    )
}

const TituloSelecaoDeAssento = styled.h1`
    font-size: 24px;
    text-align: center;
    padding: 43px;
`

const Dados = styled.form`
    display: flex;
    flex-direction: column;
    margin: 24px;
    * {
        margin: 5px;
    }
    input {
        height: 50px;
    }
    input::placeholder {
        font-style: italic;
    }
    button {
    width: 225px;
    height: 42px;
    margin-top: 40px;
    border-radius: 3px;
    border: none;
    align-self: center;
    background: #E8833A;
    color: #FFFFFF;
    }
`
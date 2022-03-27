import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ListaDeAssentos from "./ListaDeAssentos";

export default function Sessao() {
    const { idSessao } = useParams();
    console.log(`Renderizei a Sessão: ${idSessao}`);

    const [dadosParaEnviar, setDadosParaEnviar] = useState({ ids: [], name: "", cpf: "" });
    
    function enviarDados() {
        console.log("Enviando: ", dadosParaEnviar);
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dadosParaEnviar);
        promise.then(response => console.log("Deu bom o envio", response));
        promise.catch(response => console.log("Deu ruim o envio", response));
    }

    return (
        <>
            <TituloSelecaoDeAssento>Selecione o(s) assento(s)</TituloSelecaoDeAssento>
            <ListaDeAssentos idSessao={idSessao} dadosParaEnviar={dadosParaEnviar} setDadosParaEnviar={setDadosParaEnviar} />
            <Dados onSubmit={enviarDados}>
                <label for="nome">Nome do comprador:</label>
                <input
                    value={dadosParaEnviar.name}
                    onChange={(e) => {setDadosParaEnviar({ ...dadosParaEnviar, name: e.target.value })}}
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome..."
                />
                <label for="cpf">CPF do comprador:</label>
                <input
                    value={dadosParaEnviar.cpf}
                    onChange={(e) => {setDadosParaEnviar({ ...dadosParaEnviar, cpf: e.target.value })}}
                    type="number"
                    id="cpf"
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
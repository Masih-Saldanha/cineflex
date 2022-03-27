import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Assento from "./Assento";

export default function ListaDeAssentos(props) {
    const { idSessao, dadosParaEnviar, setDadosParaEnviar, cadeiras, setCadeiras } = props;

    const [listaDeAssentos, setListaDeAssentos] = useState([])
    // console.log("Lista de Assentos: ", listaDeAssentos);

    const CorSelecionado = { fundo: "#8DD7CF", borda: "#1AAE9E" };
    const CorDisponivel = { fundo: "#C3CFD9", borda: "#808F9D" };
    const CorIndisponivel = { fundo: "#FBE192", borda: "#F7C52B" };

    useEffect(() => {
        // console.log("Entrei no useEffect da lista de assentos");
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {
            const { data } = response;
            // console.log("Sessão:", data.id);
            setListaDeAssentos(data.seats);
        })
        // console.log("Sai do useEffect da lista de assentos");
    }, [])
    
    return (
        <>
            <ContainerAssentos>
                {listaDeAssentos.map(assento => {
                    return (
                        <Assento
                            key={assento.id}
                            id={assento.id}
                            name={assento.name}
                            isAvailable={assento.isAvailable}
                            CorSelecionado={CorSelecionado}
                            CorDisponivel={CorDisponivel}
                            CorIndisponivel={CorIndisponivel}
                            dadosParaEnviar={dadosParaEnviar}
                            setDadosParaEnviar={setDadosParaEnviar}
                            cadeiras={cadeiras} 
                            setCadeiras={setCadeiras}
                        />
                    )
                })}
            </ContainerAssentos>
            
            <ContainerAssentos>
                <Legenda>
                    <AssentoEstilo corFundo={CorSelecionado.fundo} corBorda={CorSelecionado.borda}></AssentoEstilo>
                    <h1>Selecionado</h1>
                </Legenda>
                <Legenda>
                    <AssentoEstilo corFundo={CorDisponivel.fundo} corBorda={CorDisponivel.borda}></AssentoEstilo>
                    <h1>Disponível</h1>
                </Legenda>
                <Legenda>
                    <AssentoEstilo corFundo={CorIndisponivel.fundo} corBorda={CorIndisponivel.borda}></AssentoEstilo>
                    <h1>Indisponível</h1>
                </Legenda>
            </ContainerAssentos>
        </>
    )
}

const ContainerAssentos = styled.figure`
    width: 339px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`

const AssentoEstilo = styled.figure`
    background-color: ${(props) => props.corFundo};
    border: 1px solid ${(props) => props.corBorda};
    width: 26px;
    height: 26px;
    border-radius: 12px;
    margin-left: 3.5px;
    margin-right: 3.5px;
    margin-bottom: 18px;

    padding-left: 6px;
    font-size: 11px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
`

const Legenda = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 0 10px;
    h1 {
        font-size: 13px;
        color: #4E5A65;
        margin-top: -10px;
    }
`
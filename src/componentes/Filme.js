import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import SelecaoDataHora from "./SelecaoDataHora";

export default function Filme(props) {
    const {  dadosRodape, setDadosRodape } = props;

    const { idFilme } = useParams();
    console.log(`Renderizei filme ${idFilme}`)

    const [dadosDiasDisponiveis, setDadosDiasDisponiveis] = useState([]);
    console.log("Dados Disponiveis: ", dadosDiasDisponiveis);
    
    useEffect(
        () => {
            console.log(`Entrei no useEffect do filme ${idFilme}`);

            const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
            promise.then(response => {
                const { days } = response.data;
                setDadosDiasDisponiveis(days);
            })
            promise.catch(response => {
                console.log(response.response);
            })

            console.log(`Sai no useEffect do filme ${idFilme}`);
        }, [])

    return (
        <>
            <TituloSelecaoDeHorario>Selecione o horário</TituloSelecaoDeHorario>
            {dadosDiasDisponiveis.map((dia, indice) => {
                return (
                    <SelecaoDataHora
                        key={indice}
                        weekday={dia.weekday}
                        date={dia.date}
                        showtimes={dia.showtimes}
                        dadosRodape={dadosRodape} 
                        setDadosRodape={setDadosRodape}
                    />
                )
            })}
        </>
    )
}
const TituloSelecaoDeHorario = styled.h1`
    font-size: 24px;
    text-align: center;
    padding: 43px;
`
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Filme() {
    const { idFilme } = useParams();
    console.log(`Renderizei Filme(${idFilme})`)

    return (
        <>
            <TituloSelecaoDeHorario>Selecione o horário</TituloSelecaoDeHorario>
            <DiaEHora>Quinta-feira - 24/06/2021</DiaEHora>
            <BotoesHorario>
                <button>15:00</button>
                <button>19:00</button>
            </BotoesHorario>
            <DiaEHora>Sexta-feira - 25/06/2021</DiaEHora>
            <BotoesHorario>
                <button>15:00</button>
                <button>19:00</button>
            </BotoesHorario>
        </>
    )
}
const TituloSelecaoDeHorario = styled.h1`
    font-size: 24px;
    text-align: center;
    padding: 43px;
`
const DiaEHora = styled.h2`
    font-size: 20px;
    margin: 24px;
`
const BotoesHorario = styled.menu`
    margin-left: 24px;

    button {
        width: 83px;
        height: 43px;
        margin-right: 8px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
    }
`
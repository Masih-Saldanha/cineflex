import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SelecaoDataHora(props) {
    const { weekday, date, showtimes, dadosRodape, setDadosRodape, setTelaInicial, setVoltou } = props;

    return (
        <>
            <DiaEHora>{weekday} - {date}</DiaEHora>
            <BotoesHorario>
                {showtimes.map(hora => {
                    return (
                        <Link onClick={() => {
                            setDadosRodape({ ...dadosRodape, diaDaSemana: weekday, data: date, hora: hora.name });
                            setTelaInicial(false);
                            setVoltou(true);
                        }} key={hora.id} to={`/sessao/${hora.id}`}>
                            <button key={hora.id}>{hora.name}</button>
                        </Link>
                    )
                })}
            </BotoesHorario>
        </>
    )
}

const DiaEHora = styled.h2`
    font-size: 20px;
    margin-left: 24px;
`
const BotoesHorario = styled.menu`
    margin-top: 24px;
    margin-left: 24px;
    margin-bottom: 24px;
    button {
        width: 83px;
        height: 43px;
        margin-right: 8px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
    }
`
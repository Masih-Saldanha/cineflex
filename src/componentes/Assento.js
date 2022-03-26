import { useState } from "react";
import styled from "styled-components";

export default function Assento(props) {
    const { id, name, isAvailable, CorSelecionado, CorDisponivel, CorIndisponivel, dadosParaEnviar, setDadosParaEnviar } = props;

    const [selecionado, setSelecionado] = useState(false);
    const [cor, setCor] = useState(
        { fundo: CorDisponivel.fundo, borda: CorDisponivel.borda }
    );

    function tirarElemento(array, item) {
        return array.filter(function(ele){ 
            return ele !== item; 
        });
    }

    if (isAvailable && name.length === 1) {
        return (
            <AssentoEstilo onClick={() => {
                if (selecionado === false) {
                    setDadosParaEnviar({ ...dadosParaEnviar, ids: [...dadosParaEnviar.ids, id] });
                    setSelecionado(true);
                    setCor({ fundo: CorSelecionado.fundo, borda: CorSelecionado.borda });
                }
                else if (selecionado === true) {
                    setDadosParaEnviar({ ...dadosParaEnviar, ids: tirarElemento(dadosParaEnviar.ids, id)});
                    setSelecionado(false);
                    setCor({ fundo: CorDisponivel.fundo, borda: CorDisponivel.borda });
                }
            }} corFundo={cor.fundo} corBorda={cor.borda} key={id}>0{name}</AssentoEstilo>
        )
    } else if (isAvailable) {
        return (
            <AssentoEstilo onClick={() => {
                if (selecionado === false) {
                    setDadosParaEnviar({ ...dadosParaEnviar, ids: [...dadosParaEnviar.ids, id] });
                    setSelecionado(true);
                    setCor({ fundo: CorSelecionado.fundo, borda: CorSelecionado.borda });
                }
                else if (selecionado === true) {
                    setDadosParaEnviar({ ...dadosParaEnviar, ids: tirarElemento(dadosParaEnviar.ids, id)});
                    setSelecionado(false);
                    setCor({ fundo: CorDisponivel.fundo, borda: CorDisponivel.borda });
                }
            }} corFundo={cor.fundo} corBorda={cor.borda} key={id}>{name}</AssentoEstilo>
        )
    } else {
        return (
            name.length === 1 ?
            <AssentoEstilo onClick={() => alert("Esse assento não está disponível")} corFundo={CorIndisponivel.fundo} corBorda={CorIndisponivel.borda} key={id}>0{name}</AssentoEstilo> : 
            <AssentoEstilo onClick={() => alert("Esse assento não está disponível")} corFundo={CorIndisponivel.fundo} corBorda={CorIndisponivel.borda} key={id}>{name}</AssentoEstilo>
        )
    }
}

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
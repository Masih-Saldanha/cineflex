import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function CartazDoFilme(props) {
    const { dadosRodape, setDadosRodape } = props;
    // console.log("Renderizei CartazDoFilme");
    const [listaDeFilmes, setListaDeFilmes] = useState([])
    // console.log("Lista de Filmes: ", listaDeFilmes);

    useEffect(() => {
        // console.log("Entrei no useEffect da lista de filmes");
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            const { data } = response;
            // console.log("Dados da API:", data);
            setListaDeFilmes(data);
        })
        // console.log("Sai do useEffect da lista de filmes");
    }, [])

    return (
        <MenuDeFilmes>
            {listaDeFilmes.map(movie => {
                return (
                    <Link onClick={() => setDadosRodape({...dadosRodape, filme: movie.title, imagem: movie.posterURL})} key={movie.id} to={`/filme/${movie.id}`}>
                        <img src={movie.posterURL} alt={movie.title} />
                    </Link>
                )
            })}
        </MenuDeFilmes>
    )
}
const MenuDeFilmes = styled.menu`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    padding-right: 30px;

img {
    width: 145px;
    height: 209px;
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: 30px;
    padding: 8px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}
`
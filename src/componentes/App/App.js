import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"

import Header from "../Header/Header"

import "../App/reset.css"
import "../App/styles.css"
import MovieSelection from "../MovieSelection/MovierSelection"

export default function App() {
    console.log("Renderizei App");
    const [movieList, setMovieList] = useState([])
    console.log("Lista de Filmes: ", movieList);
    useEffect(() => {
        console.log("Entrei no useEffect");
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            const { data } = response;
            console.log("Dados da API:", data);
            setMovieList(data);
        })
        console.log("Sai do useEffect");
    }, [])
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection />} />
            </Routes>
        </BrowserRouter>
    )
}
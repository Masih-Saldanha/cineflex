import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Topo from "../Topo";
import Home from "../Home";
import Filme from "../Filme";
import Sessao from "../Sessao";
import Rodape from "../Rodape";

import "../App/reset.css";
import "../App/styles.css";
import Sucesso from "../Sucesso";

export default function App() {
    console.log("Renderizei App");
    const [dadosRodape, setDadosRodape] = useState({filme: "", imagem: "", diaDaSemana: "", hora: ""})

    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Home dadosRodape={dadosRodape} setDadosRodape={setDadosRodape} />} />
                <Route path="/filme/:idFilme" element={<Filme dadosRodape={dadosRodape} setDadosRodape={setDadosRodape} />} />
                <Route path="/sessao/:idSessao" element={<Sessao />} />
                <Route path="/sucesso/" element={<Sucesso dadosRodape={dadosRodape} setDadosRodape={setDadosRodape} />} />
            </Routes>
            <Rodape dadosRodape={dadosRodape} />
        </BrowserRouter>
    )
}
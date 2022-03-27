import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Topo from "../Topo";
import Home from "../Home";
import Filme from "../Filme";
import Sessao from "../Sessao";
import Sucesso from "../Sucesso";
import Rodape from "../Rodape";

import "../App/reset.css";
import "../App/styles.css";

export default function App() {
    // console.log("Renderizei App");
    const [dadosRodape, setDadosRodape] = useState({filme: "", imagem: "", data: "", diaDaSemana: "", hora: ""});
    const [dadosParaEnviar, setDadosParaEnviar] = useState({ ids: [], name: "", cpf: "" });
    const [cadeiras, setCadeiras ] = useState([]);
    const [envioBemSucedido, setEnvioBemSucedido] = useState(false);

    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Home dadosRodape={dadosRodape} setDadosRodape={setDadosRodape} />} />
                <Route path="/filme/:idFilme" element={<Filme dadosRodape={dadosRodape} setDadosRodape={setDadosRodape} />} />
                <Route path="/sessao/:idSessao" element={<Sessao dadosParaEnviar={dadosParaEnviar} setDadosParaEnviar={setDadosParaEnviar} setEnvioBemSucedido={setEnvioBemSucedido} cadeiras={cadeiras} setCadeiras={setCadeiras} />} />
                <Route path="/sucesso/" element={<Sucesso dadosRodape={dadosRodape} setDadosRodape={setDadosRodape} dadosParaEnviar={dadosParaEnviar} setDadosParaEnviar={setDadosParaEnviar} cadeiras={cadeiras} setEnvioBemSucedido={setEnvioBemSucedido} />} />
            </Routes>
            <Rodape dadosRodape={dadosRodape} envioBemSucedido={envioBemSucedido} />
        </BrowserRouter>
    )
}
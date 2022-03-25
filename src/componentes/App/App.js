import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topo from "../Topo";
import Home from "../Home";

import "../App/reset.css";
import "../App/styles.css";

export default function App() {
    console.log("Renderizei App");

    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/filme/:idFilme" element={<Filme />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
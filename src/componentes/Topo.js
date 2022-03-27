import styled from "styled-components";

export default function Topo() {
    return (
        <TopoFixo >CINEFLEX</TopoFixo>
    )
}

const TopoFixo = styled.header`
    position: fixed;
    width: 100vw;
    top: 0;
    text-align: center;
    background-color: #C3CFD9;
    padding: 17px;

    font-size: 34px;
    color: #E8833A;
`
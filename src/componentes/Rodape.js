import styled from "styled-components";

export default function Rodape(props) {
    const { dadosRodape, telaInicial, voltou } = props;
    
    if (telaInicial === true) {
        return <></>
    } else {
        return (
            <Footer>
                <img src={dadosRodape.imagem} alt={dadosRodape.imagem}></img>
                <div>
                    <h1>{dadosRodape.filme}</h1>
                    {voltou === false ? <></> : <h1>{dadosRodape.diaDaSemana} - {dadosRodape.hora}</h1>}
                </div>
            </Footer>
        )
    }
}

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    height: 117px;
    width: 100vw;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    padding: 14px;
    img {
        padding: 8px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
    div {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 14px;
        font-size: 26px;
    }
`
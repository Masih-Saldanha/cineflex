export default function SelecaoDataHora() {
    return (
        <>
            <DiaEHora>Sexta-feira - 25/06/2021</DiaEHora>
            <BotoesHorario>
                <button>15:00</button>
                <button>19:00</button>
            </BotoesHorario>
        </>
    )
}
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
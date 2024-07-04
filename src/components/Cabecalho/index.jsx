import styled from "styled-components"
import CampoTexto from '../CampoTexto'

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = ({ buscaFoto, setBuscaFoto }) => {
    return (
        <HeaderEstilizado>
            <img src="/images/logo.png" alt="Logo do Space App"/>
            <CampoTexto value={buscaFoto} onChange={(elemento) => setBuscaFoto(elemento.target.value)} />
        </HeaderEstilizado>
    )
}

export default Cabecalho
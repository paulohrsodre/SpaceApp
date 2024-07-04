import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from './Tags'
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
    margin-bottom: 73px;
` 
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], aoSelecionarFoto, aoAlternarFavorito, tagSelecionada, setTagSelecionada }) => {
    return (
        <>
            <Tags tagSelecionada={tagSelecionada} setTagSelecionada={setTagSelecionada} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map( foto => <Imagem
                            aoSolicitarZoom={aoSelecionarFoto}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id}
                            foto={foto}
                        /> )}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria
import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from './components/Galeria'
import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FundoGradiente = styled.div`
  background: var(--gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotosSelecionada, setFotosSelecionada] = useState(null)
  const [buscaFoto, setBuscaFoto] = useState('')
  const [tagSelecionada, setTagSelecionada] = useState(0)

  const removerAcentos = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  useEffect(() => {
    let fotosFiltradas = fotos.filter((foto) => 
      removerAcentos(foto.titulo.toLocaleLowerCase()).includes(removerAcentos(buscaFoto.toLocaleLowerCase()))
    );

    if (tagSelecionada !== 0) {
      fotosFiltradas = fotosFiltradas.filter(foto => foto.tagId === tagSelecionada)
    }

    setFotosGaleria(fotosFiltradas)
  }, [buscaFoto, tagSelecionada])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotosSelecionada?.id) {
      setFotosSelecionada({
        ...fotosSelecionada,
        favorita: !fotosSelecionada.favorita
      })
    }
    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho buscaFoto={buscaFoto} setBuscaFoto={setBuscaFoto} />
        <MainContainer>
          <BarraLateral/>
          <ConteudoGaleria>
            <Banner 
              texto='A galeria mais completa de fotos do espaço'
              backgroundImage={bannerBackground}
            />
            <Galeria 
              aoSelecionarFoto={foto => setFotosSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito} 
              fotos={fotosGaleria} 
              tagSelecionada={tagSelecionada}
              setTagSelecionada={setTagSelecionada}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotosSelecionada} 
        aoFechar={() => setFotosSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App

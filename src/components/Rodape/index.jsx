import styled from "styled-components"

const RodapeContainer = styled.footer`
    background-color: #04244F;
    color: #FFF;
    font-size: 16px;
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
`

const RedesSociais = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
    padding-left: 24px;
`

const Rodape = () => {
    return (
        <RodapeContainer>
            <RedesSociais>
                <img src="/images/sociais/facebook.svg" alt="Facebook" />
                <img src="/images/sociais/twitter.svg" alt="Twitter" />
                <img src="/images/sociais/instagram.svg" alt="Instagram" />
            </RedesSociais>

            <div>
                <h5>Desenvolvido por Paulo Sodré</h5>
            </div>
        </RodapeContainer>
    )
}

export default Rodape
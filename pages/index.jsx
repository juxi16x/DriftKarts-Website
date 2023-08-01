import React from 'react';
import { MapLink } from '../data/links';
import { styled } from 'styled-components';
import { price } from '../data/price';

const StyledH2 = styled.h2`
    font-family: Consolas;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    width: 78.5%;
    display: flex;
    flex-direction: column;
`

const StyledP = styled.p`
    font-size: 18px;
    font-family: Consolas;
    margin-top: 0;
`

const Block = styled.div`
    margin: 30px;
    margin-left: 0px;
    margin-top: 0px;
    font-family: Consolas;
`

function Home() {

    return (
        <>
            <Container>
                <Content>
                    <Block>
                        <StyledH2>
                            O nas?
                        </StyledH2>
                        <StyledP>Na DriftKarts Wilamowice możesz za niesamowicie dobrą cenę podriftować na gokartach.</StyledP>
                    </Block>
                    <Block>
                        <StyledH2>
                            Gdzie nas znajdziecie?
                        </StyledH2>
                        <StyledP>
                            Znajdziecie nas obok obiektu LKS W Wilamowicach (43-330).<br/>
                            Można również skorzystać na poniżej przedstawionej mapy.
                        </StyledP>
                    </Block>
                    <Block>
                        <StyledH2>
                            Cennnik:
                        </StyledH2>
                        <StyledP>
                            {price} - 1 osoba (10min)
                        </StyledP>
                    </Block>
                </Content>
            </Container>

            <iframe src={MapLink} 
            width="100%" 
            height="700rem" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title='Map'
            id='map'>
            </iframe>
        </>
    );
}

export default Home;
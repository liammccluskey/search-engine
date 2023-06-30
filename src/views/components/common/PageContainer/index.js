import styled from 'styled-components'

export const PageContainer = styled.div`
    background-color: ${p => p.theme.bgc};
    height: 100vh;
    width: 100vw;
    overflow: scroll;
    display: flex;
    justify-content: flex-start;
    alignItems: center;
    flex-direction: column;
`
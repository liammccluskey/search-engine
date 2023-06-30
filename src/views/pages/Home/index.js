import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { PageContainer } from '../../components/common/PageContainer'
import { BodyContainer } from '../../components/common/BodyContainer'
import { MainHeader } from '../../components/headers/MainHeader'

export const Home = props => {
    const {
        
    } = props
    const navigate = useNavigate()

    const onSubmitSearch = () => {

    }

    return (
        <PageContainer>
            <MainHeader />
            <BodyContainer>
                <Container>
                    
                </Container>
            </BodyContainer>
        </PageContainer>
    )
}

const Container = styled.div`
    display: flex;
`
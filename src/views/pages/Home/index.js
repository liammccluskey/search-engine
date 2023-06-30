import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import google from 'googlethis'

import { PageContainer } from '../../components/common/PageContainer'
import { BodyContainer } from '../../components/common/BodyContainer'
import { MainHeader } from '../../components/headers/MainHeader'
import { SearchBar } from '../../components/common/SearchBar'
import { Button } from '../../components/common/Button'

export const Home = props => {
    const {
        
    } = props
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState('')

    const onChangeSearchText = e => {
        setSearchText(e.target.value)
    }

    const onSubmitSearch = async () => {
        const options = {
            page: 0, 
            safe: true,
            parse_ads: false,
            additional_params: { 
              // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
              hl: 'en' 
            }
          }
        try {
            const response = await google.search('TWDG', options)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PageContainer>
            <MainHeader />
            <BodyContainer>
                <Container>
                    <div className='search-container'>
                        <h1>E-Search</h1>
                        <SearchBar
                            value={searchText}
                            placeholder='Search anything'
                            onChange={onChangeSearchText}
                            onSubmit={onSubmitSearch}
                            className='search-bar'
                        />
                        <Button
                            type='solid'
                            priority={2}
                            onClick={onSubmitSearch}
                            title='Search'
                            icon='bi-search'
                        />
                    </div>
                </Container>
            </BodyContainer>
        </PageContainer>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & .search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    & .search-bar {
        width: min(90%, 450px);
        margin: 20px 0px;
    }
`
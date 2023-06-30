import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getIsMobile, getIsSemiMobile } from '../../../../redux/theme'
import { MainMenu } from '../MainMenu'

export const MainHeaderComponent = props => {
    const {
        hasSubheaderBelow=false,
    } = props
    const navigate = useNavigate()
    const [mainMenuHidden, setMainMenuHidden] = useState(true)

    const onClickLogo = () => navigate('/')

    return (
        <Root className={`d-flex jc-space-between ai-center ${!hasSubheaderBelow && 'no-subheader'}`}>
            <div
                className='d-flex jc-flex-start ai-center clickable'
                onClick={onClickLogo}
            >
                <img className='logo-icon'
                    src='/images/logo.png'
                    height={35}
                    width={35}
                />
                <h3 className='logo-text'>
                    E-Search
                </h3>
            </div>
            <MainMenu
                menuHidden={mainMenuHidden}
                setMenuHidden={setMainMenuHidden}
            />
        </Root>
    )
}

const mapStateToProps = state => ({
    isMobile: getIsMobile(state),
    isSemiMobile: getIsSemiMobile(state),
})

const Root = styled.div`
    background-color: ${props => props.theme.bgcNav};
    min-height: var(--h-mainheader);
    padding: 0px var(--ps-mainheader);
    width: 100%;
    box-sizing: border-box;
    
    &.no-subheader {
        border-bottom: ${p => p.theme.navBorder};
        position: sticky;
        top: 0px;
    }

    & .logo-icon {
        // border-radius: 50%;
        margin-right: 15px;
    }

    & .logo-text {
        font-weight: 600;
        color: ${p => p.theme.textPrimary};
    }
`

export const MainHeader = connect(mapStateToProps)(MainHeaderComponent)
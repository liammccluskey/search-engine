import React, {useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { DropdownMenu } from '../../common/DropdownMenu'
import { Themes, Tints } from '../../../../redux/theme'
import { Tooltip } from '../../common/Tooltip'

export const MainMenuComponent = props => {
    const {
        menuHidden,
        pageLinks,

        setMenuHidden,

        ...rest
    } = props
    const navigate = useNavigate()


    const onClickThemeColor = themeColor => {
        //props.patchUserThemeColor(themeColor)
    }

    const onClickTintColor = tintColor => {
       // props.patchUserTintColor(tintColor)
    }

    return (
        <DropdownMenu
            {...rest}
            menuHidden={menuHidden}
            setMenuHidden={setMenuHidden}
            triggerElement={
                <Icon className='bi-grid grid-icon' />
            }
            triggerHeight={35}
            menuElement={
                <MenuContainer className='d-flex fd-column jc-flex-start ai-stretch'>
                    <div className='appearance-container'>
                        <div className='row-container jc-space-between'>
                            <div className='d-flex ai-center'>
                                <i className='bi-palette' />
                                <p>Theme</p>
                            </div>
                            <div className='d-flex ai-center jc-flex-end'>
                                {Object.values(Themes).map( ({icon, name, value}, i) => {
                                    const isLast = i === Object.values(Themes).length - 1
                                    const marginRight = isLast ? 0 : 7
                                    return (
                                        <Tooltip title={name} style={{marginRight}} key={value}> 
                                            <i
                                                className={`bi-${icon} oh-c-t`}
                                                onClick={() => onClickThemeColor(value)}
                                                style={{marginRight}}
                                            />
                                        </Tooltip>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='row-container jc-space-between'>
                            <div className='d-flex ai-center'>
                                <i className='bi-paint-bucket' />
                                <p>Tint Color</p>
                            </div>
                            <div className='d-flex ai-center jc-flex-end'>
                                {Object.values(Tints).map( ({tint, name, value}, i) => {
                                    const isLast = i === Object.values(Tints).length - 1
                                    const marginRight = isLast ? 0 : 7
                                    return (
                                        <Tooltip title={name} style={{marginRight}} key={value}> 
                                            <i
                                                style={{
                                                    height: 17, width: 17,
                                                    borderRadius: '50%',
                                                    backgroundColor: tint,
                                                    marginRight
                                                }}
                                                onClick={() => onClickTintColor(value)}
                                            />
                                        </Tooltip>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </MenuContainer>
            }
        />
    )
}

const Icon = styled.i`
    font-size: 20px;
`

const MenuContainer = styled.div`
    overflow: hidden;

    & .appearance-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    & .appearance-container {
        border-bottom: 1px solid ${p => p.theme.bc};
    }

    & .row-container {
        padding: 9px 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }
    & .row-container i {
        font-size: 18px;
        color: ${p => p.theme.textMain};
        margin-right: 15px;
    }

    & .bi-chevron-down {
        color: ${p => p.theme.textSecondary};
        font-size: 16px;
        margin-right: 10px;
    }
`
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export const MainMenu = connect(mapStateToProps, mapDispatchToProps)(MainMenuComponent)
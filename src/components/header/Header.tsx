import React from 'react'
import Icon from '../icon/Icon'
import { StyleHeader, StyleNameLogo, StyleProfile, } from "./styleHeader"

const Header = () => {
    return (
        <StyleHeader>
            <StyleNameLogo>Enzo dashboard</StyleNameLogo>
            <StyleProfile>
                profile
                <Icon iconName={"user-male"} color={"#4a4a4a"} size={30} />

            </StyleProfile>
        </StyleHeader>
    )
}

export default Header

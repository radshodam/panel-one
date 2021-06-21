import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.span<{size:any}>`
color: ${props => props.color};
font-size: ${props => props.size};

`
interface IconProps {
    iconName: string,
    color: string
    size: any
}

const Icon: React.FC<IconProps> = ({ iconName, color, size }) => {
    return (

        <StyledIcon className={`icon-${iconName}`} color={color} size={size+"px"} />

    )
}

export default Icon

import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import DiscordImg from '../../assets/discord.png'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme';

const TouchableOpacityContainer = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`

const IconWrapper = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.colors.line};
`

const Title = styled.Text`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
`

const Icon = styled.Image`
    width: 24px;
    height: 18px;
`

type Props = TouchableOpacityProps & {
    title: string;
}

const ButtonIcon = ({ title, ...rest } : Props) => {
    return (
        <TouchableOpacityContainer {...rest} >
            <IconWrapper>
                <Icon source= { DiscordImg } />
            </IconWrapper>
            <Title>
                { title }
            </Title>
        </TouchableOpacityContainer>
    )
}

export default ButtonIcon;
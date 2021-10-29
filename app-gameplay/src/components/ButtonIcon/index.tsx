import React from 'react'
import { StyleSheet } from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme'

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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

type Props = RectButtonProps & {
    title: string;
}

const ButtonIcon = ({ title, ...rest } : Props) => {
    return (
        <RectButton {...rest} style={styles.container}>
            <IconWrapper>
                <Icon source= { DiscordImg } />
            </IconWrapper>
            <Title>
                { title }
            </Title>
        </RectButton>
    )
}

export default ButtonIcon;
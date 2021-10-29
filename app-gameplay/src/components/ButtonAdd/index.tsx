import React from 'react'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { StyleSheet } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme'

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const ButtonAdd = ({...rest}: RectButtonProps) => {
    return (
        <RectButton style={styles.container}>
            <MaterialCommunityIcons
                name= "plus"
                color= { theme.colors.heading }
                size= { 24 }
            >

            </MaterialCommunityIcons>
        </RectButton>
    )
}

export default ButtonAdd;
import React, { ReactNode } from 'react'

import { StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import theme from '../../global/styles/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

type Props = {
    children: ReactNode;
}

const Background = ({ children } : Props) => {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style= { styles.container }
            colors= { [secondary80, secondary100] }
        >
            { children }
        </LinearGradient>
    )
}

export default Background;
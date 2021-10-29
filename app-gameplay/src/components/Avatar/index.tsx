import React from 'react';

import { Image, StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import theme from '../../global/styles/theme'

const styles = StyleSheet.create({
    container: {
        width: 49,
        height: 49,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 8
    }
});

type Props = {
    urlImage: string;
}

const Avatar = ({ urlImage } : Props) => {

    const { secondary50, secondary70 } = theme.colors;


    return (
        <LinearGradient
            style= { styles.container }
            colors= { [secondary50, secondary70] }
        >
           <Image
                source={{ uri: urlImage }}
                style= { styles.avatar }
           />
        </LinearGradient>
    )
}

export default Avatar;
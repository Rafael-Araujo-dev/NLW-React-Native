import React from 'react'
import { StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
//import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme'

import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'

const Container = styled.View`
    flex: 1;
`

const Header = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: /* calc( $/*{getStatusBarHeight()} + */ 46px;
    margin-bottom: 42px;
`

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const { secondary80, secondary100 } = theme.colors;

const Home = () => {
    return (
        <LinearGradient
            style= { styles.container }
            colors= { [secondary80, secondary100] }
        >
            <Container>
                <Header>
                    <Profile />
                    <ButtonAdd />
                </Header>
            </Container>
        </LinearGradient>
    )
}

export default Home;
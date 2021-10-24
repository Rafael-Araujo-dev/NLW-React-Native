import React from 'react'

//import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme'

import Profile from '../../components/Profile'

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

const Home = () => {
    return (
        <Container>
            <Header>
                <Profile />
            </Header>
        </Container>
    )
}

export default Home;
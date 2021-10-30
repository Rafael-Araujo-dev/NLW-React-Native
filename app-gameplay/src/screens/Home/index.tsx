import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
//import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme'

import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelector from '../../components/CategorySelector'

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
    const [category, setCategory] = useState('');

    let handleSelectedCategory = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

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
                <>
                    <CategorySelector 
                        categorySelected={category}
                        setCategory= { handleSelectedCategory }
                    />
                </>
            </Container>
        </LinearGradient>
    )
}

export default Home;
import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

import IllustrationImg from '../../assets/illustration.png'

import theme from '../../global/styles/theme'

import ButtonIcon from  '../../components/ButtonIcon'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Content = styled.View`
    margin-top: -40px;
    padding: 0 50px;
`

const Title = styled.Text`
    color: ${theme.colors.heading};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
    font-family: ${theme.fonts.title700};
    line-height: 40px;
`

const SubTitle = styled.Text`
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;
    font-family: ${theme.fonts.title500};
    line-height: 25px;
`

const Image = styled.Image`
    width: 100%;
    height: 360px;
`

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const { secondary80, secondary100 } = theme.colors;

const SignIn = ({}) => {

    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('Home')
    }

    return (
        <LinearGradient
            style= { styles.container }
            colors= { [secondary80, secondary100] }
        >
            <Container>
                <Image source= { IllustrationImg } resizeMode= "stretch"/>
                <Content>
                    <Title>
                        Organize {`\n`}
                        suas jogatinas {`\n`}
                        facilmente
                    </Title>
                    <SubTitle>
                        Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </SubTitle>
                    <ButtonIcon 
                        title= 'Entrar com Discord' 
                        onPress= {handleSignIn}
                        />
                </Content>
            </Container>
        </LinearGradient>
    )
}

export default SignIn;
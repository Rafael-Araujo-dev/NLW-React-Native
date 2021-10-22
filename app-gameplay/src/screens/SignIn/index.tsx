import React from 'react'
import { StatusBar } from 'react-native'

import styled from 'styled-components/native'

import IllustrationImg from '../../assets/illustration.png'

import ButtonIcon from  '../../components/ButtonIcon'

const Container = styled.View`
    flex: 1;
    background-color: #0D133D;
    justify-content: center;
    align-items: center;
`

const Content = styled.View`
    margin-top: -40px;
    padding: 0 50px;
`

const Title = styled.Text`
    color: #DDE3F0;
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
`

const SubTitle = styled.Text`
    color: #DDE3F0;
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;
`

const Image = styled.Image`
    width: 100%;
    height: 360px;
`

const SignIn = () => {

    return (
        <Container>
            <StatusBar 
                barStyle= "light-content"
                backgroundColor= "transparent"
                translucent= { true }
            />
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
                <ButtonIcon title= 'Entrar com Discord' activeOpacity= {.7} />
            </Content>
        </Container>
    )
}

export default SignIn;
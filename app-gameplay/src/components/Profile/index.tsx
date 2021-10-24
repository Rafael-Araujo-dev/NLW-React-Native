import React from 'react'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme'

import Avatar from '../../components/Avatar'

const Container = styled.View`
    flex-direction:  row;
    align-items: center;
`

const User = styled.View`
    flex-direction:  row;
`

const Content = styled.View`
    flex-direction: column;
`

const Greetings = styled.Text`
    font-family: ${theme.fonts.title500};
    font-size: 24px;
    color: ${theme.colors.heading};
    margin-right: 5px;

`

const UserName = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 24px;
    color: ${theme.colors.heading};
`

const Message = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
`


const Profile = () => {
    return (
        <Container>
            <Avatar urlImage="https://github.com/Rafael-Araujo-dev.png" />
            <Content>
                <User>
                    <Greetings>Olá, </Greetings>
                    <UserName>Rafael</UserName>
                </User>
                <Message>Hoje é dia de vitória</Message>
            </Content>
        </Container>
    )
}

export default Profile;
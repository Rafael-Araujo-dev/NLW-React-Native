import React from 'react'

import { StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import theme from '../../global/styles/theme'

import SvgIcon from '../../components/SvgIcon'

const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    }
})

const Content = styled.View`
    width: 100px;
    height: 116px;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
`

const Checked = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${theme.colors.primary};
    align-self: flex-end;
    margin: 7px;
    margin-bottom: -7px;
    border-radius: 4px;
    border-width: 2px;
    border-color: ${theme.colors.secondary50};
`

const Check = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${theme.colors.secondary100};
    align-self: flex-end;
    margin: 7px;
    margin-bottom: -7px;
    border-radius: 4px;
    border-width: 2px;
    border-color: ${theme.colors.secondary50};
`

const Title = styled.Text`
    font-family: ${theme.fonts.title500};
    color: ${theme.colors.heading};
    font-size: 15px;
    margin-bottom: 7px;
`

type Props = RectButtonProps & {
    id: string
    title: string
    icon: string
    checked?: boolean
    setCategory: (categoryId: string) => void 
}

const Category = ({
    id,
    title,
    icon,
    checked = false,
    setCategory
} : Props) => {

    const { secondary50, secondary70 } = theme.colors;

    return (
        <RectButton style= { styles.container } onPress={ () => setCategory(id) } >
            <LinearGradient
                style= { styles.container }
                colors= { [secondary50, secondary70] }
            >
                <Content style={ checked? { opacity: 1 } : { opacity: 0.5 } }>
                    { checked ? <Checked /> : <Check />}
                    <SvgIcon 
                        width= { 48 } 
                        height= { 48 } 
                        iconLink= { icon }
                    />
                    <Title> { title } </Title> 
                </Content>
            </LinearGradient>
        </RectButton>
    )
}

export default Category;
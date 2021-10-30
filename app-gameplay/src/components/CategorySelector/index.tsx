import React from 'react'

import styled from 'styled-components/native'

import { categories } from '../../utils/categories'

import Category from '../../components/Category'

const Container = styled.ScrollView`
    
`

type Props = {
    categorySelected: string
    setCategory(categoryId: string) : void
}

const CategorySelector = ({ categorySelected, setCategory } : Props) => {
    return (
        <Container
            horizontal
            showsHorizontalScrollIndicator= { false }
            contentContainerStyle= {{ paddingRight: 40, paddingLeft: 30 }}
        >
            {
                categories.map(category => {
                    return (
                            <Category
                                key= { category.id }
                                id= { category.id }
                                title= { category.title }
                                icon= { category.icon }
                                checked= { category.id === categorySelected }
                                setCategory= { setCategory }
                            />
                        )
                })
            }
        </Container>
    )
}

export default CategorySelector;
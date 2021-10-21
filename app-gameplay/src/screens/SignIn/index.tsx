import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import  styles  from './styles'

const SignIn = () => {

    const [text, setText] = useState('');

    let handleTextInput = (value: string) => {
        setText(value);
    }

    return (
        <View style= { styles.container }>
            <Text>Hello World, NLW Togheter!</Text>

            <Text style= { styles.youTyped }>
                Você digitou: { text }
            </Text>

            <TextInput 
                style= { styles.input }
                placeholder= 'Digite aqui'
                onChangeText= {handleTextInput}
            />
        </View>
    )
}

export default SignIn;
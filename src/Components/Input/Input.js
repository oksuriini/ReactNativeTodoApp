import React from "react";

import {View, StyleSheet, TextInput} from 'react-native';

const Input = ({inputValue, inputChange}) => (
    <View style={style.inputContainer}>
        <TextInput 
            value={inputValue}
            style={style.input}
            placeholder="Enter task to be done."
            placeholderTextColor='#6a6a6a'
            onChangeText={inputChange}>
        </TextInput>
    </View>
)

const style = StyleSheet.create({
    inputContainer: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 10,
        shadowRadius: 4,
        shadowColor: '#000000',
        textShadowOffset: {width: 10, height:10},
        minWidth: 200,
        width: 300,
    },
    input: {
        height: 60,
        backgroundColor: '#8c8c8c',
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default Input;
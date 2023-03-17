import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";


const TabButton = ({toggleType, active, type}) => (
    <View style={active == type ? styles.active: styles.button}>
    <TouchableHighlight
        name = {type}
        onPress={() => toggleType(type)}
        >
            <Text>{type}</Text>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 4,
        borderColor: '#777777',
        borderWidth: 3,
        width: '33%',
    },
    active: {
        padding: 10,
        borderRadius: 4,
        borderColor: '#03C04A',
        borderWidth: 3,
        width: '33%',
    }
});

export default TabButton;
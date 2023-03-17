import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Button = ({submitToDo}) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
        style={styles.button}
        onPress={submitToDo}
        underlayColor='#efefef'>
            <Text style={styles.submit}>
                Add Todo item!
            </Text>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "flex-end"
    },
    button: {
        backgroundColor: "#ffffff",
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "rgba(0,0,0,1)",
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        paddingLeft: 20,
        paddingRight: 20
    },
    submit: {
        fontWeight: 'bold',
        color: '#666666'
    }
});

export default Button;
import React from "react";
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

// Jokaisen listan tehtävän 'Delete' ja 'Done' nappulat luodaan tämän koponentin perusteella.
// complete määrittää 'Done' nappulan tyylin riippuen onko tehtävä merkitty tehdyksi vai ei.
// name määrittää 
const ToDoButton = ({onPress, complete, name}) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={styles.button}>
            <Text style={[
                styles.text,
                complete ? styles.complete: null,
                name === "Delete" ? styles.deleteButton: null
            ]}>{name}</Text>
        </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
        alignSelf: "flex-end",
        padding: 5,
        width: 60,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#442244',
        borderWidth: 1,
        shadowColor: "#000000",
        shadowOffset: {width: 5, height: 5},
        marginBottom: 5,
        marginRight: 0,
        marginLeft: 5,
    },
    text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'red'
    }
})

export default ToDoButton
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToDoButton from "../Button/ToDoButton";

const ToDoItem = ({todo, toggleComplete, deleteTodo}) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <ToDoButton
                name='Done'
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoindex)} />
            <ToDoButton
                name='Delete'
                onPress={() => deleteTodo(todo.todoindex)} />
        </View>
    </View>
)

const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#eeeeee',
        borderWidth: 1,
        borderColor: "#888888",
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 14,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: '#20f47a',
        shadowOffset: {width: 2, height: 2},
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoText:{
        fontWeight: 400,
        fontSize: 16,
        width: 200
    },
    buttons : {
        marginTop: 0,
        marginBottom: 0
    }
});

export default ToDoItem;
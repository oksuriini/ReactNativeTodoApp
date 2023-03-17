import React from "react";
import { View } from "react-native";
import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, toggleComplete, deleteTodo, stateType}) => {
    // Määritellään, mitä tehtäviä halutaan renderöidä if ja else if ehtotapojen avulla
    if(stateType === 'All'){
    todos = todos.map((todo, i) => {
        return (
            <ToDoItem
                    key={todo.todoindex}
                    todo = {todo}
                    toggleComplete ={toggleComplete}
                    deleteTodo={deleteTodo}/>
        )
    })} else if( stateType === 'Active'){
        todos = todos.map((todo, i) => {
            if(!todo.complete){
            return (
                <ToDoItem
                        key={todo.todoindex}
                        todo = {todo}
                        toggleComplete ={toggleComplete}
                        deleteTodo={deleteTodo}/>
            )}
    })} else if( stateType === 'Complete'){
        todos = todos.map((todo, i) => {
            if(todo.complete){
            return (
                <ToDoItem
                        key={todo.todoindex}
                        todo = {todo}
                        toggleComplete ={toggleComplete}
                        deleteTodo={deleteTodo}/>
            )}
    })}
    
    
    return <View>{todos}</View>;
}

//const styles = StyleSheet.create({
//    
//});

export default ToDoList;
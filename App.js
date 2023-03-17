import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Heading from './src/Components/Heading/Heading';
import Input from './src/Components/Input/Input';
import Button from './src/Components/Button/Button';
import ToDoList from './src/Components/ToDoList/ToDoList'
import TabBar from './src/Components/TabBar/TabBar';

let todoindex = 0; // Määrittää jokaisen tehtävän todoindex numeron

class App extends Component{
    constructor(){
        super()
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
        }
        // Kutsutaan load funktiota, joka lataa olemassa olevan tiedon state:en.
        this.load()
    }



    
    

    // Filtteröi mitkä tehtävät näytetään listassa
    toggleType = (inputVal) => {
        console.log(`${inputVal}`)
        this.state.type = inputVal
        this.setState({inputVal})
        this.save(this.state)
    }

    // Muttaa state.inputValue staten arvoa
    inputChange(inputValue){
        console.log(`input value change ${inputValue}`)
        this.setState({inputValue})
    }

    // Luo uuden todo objektin inputValue:n sisälle syötetyn kuvauksen perusteella
    submitToDo = async () => {
        if(this.state.inputValue.match(/^\s*$/)) {
            return;
        }

        // Toimii jokaisen todo objektin muodostimena ja antaa sille oletusarvot
        const todo = {
            title: this.state.inputValue,
            todoindex,
            complete: false
        }

        // Kasvatetaan todoindex:iä aina yhdellä, kun on luotu uusi todo objekti
        todoindex++;

        // Luodaan array kaikkien aiempien tehtävien pohjalta, ja lisätään siihen uusi todo objekti
        const todos = [...this.state.todos, todo]
        await this.setState({todos, inputValue: ''}, () => {
            console.log(`State set to ${JSON.stringify(this.state)}`)
        })

        // Tallennetaan muutokset AsyncStorage:en aina kun state.todos muuttuu
        await this.save(this.state)
    }

    // Tallentaa arvo parametrin, AsyncStoragen avaimeen "saveItem".
    // Ohjelmassa arvo on aina "this.state", koska tällä funktiolla tallennetaan ainoastaan state.
    save = async (arvo) => {
        try {
            var stringarvo = JSON.stringify(arvo)
            console.log(stringarvo)
            await AsyncStorage.setItem("saveItem", stringarvo)
        } catch (error) {
            console.log(error)
        }
    }

    // Lataa ohjelmaan 'saveItem'-nimisestä avaimesta tiedot, jotka asetetaan stateen.
    load = async () => {
        try {
            var huh = await AsyncStorage.getItem("saveItem")
            var real = JSON.parse(huh)
            console.log(real)
            if(real != null){
                this.setState(real)
                // Määritetään todoindex korkeimmaksi indeksiksi mikä tiedoista löytyy
                todoindex = this.findMaxIndex()
                console.log(todoindex)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    // Etsitään todos arrayn korkein indeksi, jotta duplikaatti indeksejä ei synny
    findMaxIndex(){
        var temp = 0
        this.state.todos.forEach(element => {
            if(temp < element.todoindex){
                temp = element.todoindex
            }
            temp++
        });
        return temp
    }

    // Määritetään tehtävä tehdyksi jos se ei ennestään ole tehty,
    // sekä tekemättömäksi jos se on ennestään tehty. 
    toggleComplete = async (idx) => {
        let todos = this.state.todos
        todos.forEach(todo => {
            if(todo.todoindex === idx){
                todo.complete = !todo.complete
            }
        });
        await this.setState({todos})
        // Tallennetaan muutokset muistiin
        await this.save(this.state)
    }

    // Poistetaan tehtävä listasta indeksin perusteella
    deleteTodo = async (idx) =>{
        let { todos } = this.state
        todos = todos.filter((todo) => todo.todoindex !== idx)
        await this.setState({todos})
        console.log({todos})

        // Tallennetaan muutokset
        await this.save(this.state)
    }



    // renderöidään aplikaatio ruudulle määritettyjen komponenttien ja muiden ominaisuuksien perusteella
    render() {
        const {inputValue} = this.state
        return (
                <ScrollView keyboardShouldPersistTaps='always'
                    style = {styles.content}>
                    <View style={styles.mainview}>
                        <Heading />
                        <Input 
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)}
                        />
                        <Button submitToDo={this.submitToDo}></Button>
                        <ToDoList 
                        todos={this.state.todos}
                        toggleComplete={this.toggleComplete}
                        deleteTodo={this.deleteTodo}
                        stateType={this.state.type}/>
                    </View>
                <TabBar toggleType = {this.toggleType} active={this.state.type} style={styles.navbar}/>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 5,
    },
    content: {
        paddingBottom: 100,
    },
    mainview: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navbar:{
        position:'absolute',
        flex: 1,
        bottom: 0,
    }
});

export default App;
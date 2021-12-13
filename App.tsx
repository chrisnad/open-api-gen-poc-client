import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Api from './Api';

export default function App() {

    const [todosList, setTodosList] = useState([]);

    const [todoAsPet, setTodoAsPet] = useState([]);

    const [inputText, setInputText] = useState('');

    let fetchTodos = async () => {
        let response = await Api.TodoApi.getTodos().then((response) => response.data)
        setTodosList([response.at(0).name, response.at(0).date, response.at(0).description]);
    }

    let fetchTodo = async () => {
        console.log({inputText});
        let response = await Api.TodoApi.getTodo(inputText).then((response) => response.data)
        setTodoAsPet([response.name, response.date, response.description]);
    }

    let captureInput = (input) => {
        setInputText(input.target.value);
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button title="get Todos List" onPress={fetchTodos}/>
            <Text>{todosList.at(0)}</Text>
            <Text>{todosList.at(1)}</Text>
            <Text>{todosList.at(2)}</Text>
            <input placeholder="pet id to get" onChange={captureInput}/>
            <Button title="get todo by id" onPress={fetchTodo}/>
            <Text>{todoAsPet.at(0)}</Text>
            <Text>{todoAsPet.at(1)}</Text>
            <Text>{todoAsPet.at(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

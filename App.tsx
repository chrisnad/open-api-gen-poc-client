import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { TodoApi, Todo } from './Api/generated';

export default function App() {

    const [todosList, setTodosList] = useState([] as Todo[]);

    const [todoAsPet, setTodoAsPet] = useState([] as Todo);

    const [inputText, setInputText] = useState('');

    const todoApi = new TodoApi();

    let fetchTodos = async () => {
        let response: Todo[] = await todoApi.getTodos().then((response) => response.data)
        setTodosList(response);
    }

    let fetchTodo = async () => {
        let response:Todo = await todoApi.getTodo(inputText).then((response) => response.data);
        setTodoAsPet(response);
    }

    let captureInput = (input) => {
        setInputText(input.target.value);
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button title="get Todos List" onPress={fetchTodos}/>
            <Text>{todosList[0]?.name}</Text>
            <Text>{todosList[0]?.date}</Text>
            <Text>{todosList[0]?.description}</Text>
            <input placeholder="pet id to get" onChange={captureInput}/>
            <Button title="get todo by id" onPress={fetchTodo}/>
            <Text>{todoAsPet.name}</Text>
            <Text>{todoAsPet.date}</Text>
            <Text>{todoAsPet.description}</Text>
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

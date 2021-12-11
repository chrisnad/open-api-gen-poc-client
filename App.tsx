import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TodoApi} from "./Api";

export default function App() {

    const [data, setData] = useState([]);

    let fetchData = async () => {
        const todoApi = new TodoApi();
        let response = await todoApi.getTodos().then((response) => response.data)
        setData([response.at(0).name, response.at(0).date, response.at(0).description]);
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button title="get Todos List" onPress={fetchData}/>
            <Text>{data.at(0)}</Text>
            <Text>{data.at(1)}</Text>
            <Text>{data.at(2)}</Text>
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

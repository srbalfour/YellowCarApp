import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colours from '../constants/colours';
import { PaperProvider } from 'react-native-paper';
import { Card, Button, Text } from 'react-native-paper';
import React, { Component, useState } from 'react';

const PlayGame = () => {
    const [players, setPlayers] = useState([
        { id: 0, username: "Player0", score: 0 },
        { id: 1, username: "Player1", score: 0 },
    ]);

    return (
        <View>
            {
                players.map((player) => {
                    return (
                        <Card style={gameStyles.game} key={player.id}>
                            <Card.Title title={player.username} />
                            <Text>Score: {player.score}</Text>
                        </Card>
                    )
                })
            }
            <Button onPress={() => {
                setPlayers(players => [...players, { id: players.length, username: `Player${players.length}`, score: 0 }]);
            }}>Add new player</Button>
        </View >
    )
};



const gameStyles = StyleSheet.create({
    game: {
        backgroundColor: colours.backgroundNav,

    },

});





export default PlayGame;
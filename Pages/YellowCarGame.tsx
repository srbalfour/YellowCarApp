import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colours from '../constants/colours';
import { PaperProvider } from 'react-native-paper';
import { Card, Button, Text } from 'react-native-paper';
import React, { Component, useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';

const PlayGame = () => {
    const [players, setPlayers] = useState([
        { id: 0, username: "Player0", score: 0 },
        { id: 1, username: "Player1", score: 0 },
    ]);

    const [value, setValue] = React.useState('');           //for the segmented buttons

    return (
        <View>
            {
                players.map((player) => {
                    return (
                        <Card style={gameStyles.game} key={player.id}>
                            <Card.Title title={player.username} />

                            <SegmentedButtons
                                style={gameStyles.buttons}
                                value={value}
                                onValueChange={setValue}
                                buttons={[
                                    {
                                        value: 'add three',
                                        label: '+ 3',
                                    },
                                    {
                                        value: 'add one',
                                        label: '+ 1'
                                    },
                                ]}
                            />
                            
                            <Text>Score: {player.score}</Text>


                            <SegmentedButtons
                                style={gameStyles.buttons}
                                value={value}
                                onValueChange={setValue}
                                buttons={[
                                    {
                                        value: 'remove one',
                                        label: '- 1',
                                    },
                                    {
                                        value: 'remove three',
                                        label: '- 3'
                                    },
                                ]}
                            />


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
    buttons: {
        backgroundColor: colours.backgroundMain,
    },

});





export default PlayGame;
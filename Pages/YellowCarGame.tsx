import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colours from '../constants/colours';
import { PaperProvider } from 'react-native-paper';
import { Card, Button, Text } from 'react-native-paper';
import React, { Component, useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';
import {ScrollView  } from 'react-native';

const PlayGame = () => {
    const [players, setPlayers] = useState([
        { id: 0, username: "Player0", score: 0 },
        { id: 1, username: "Player1", score: 0 },
    ]);

    const [value, setValue] = React.useState('');           //for the segmented buttons

    return (
        <ScrollView style={gameStyles.scroll}>
            {
                players.map((player) => {
                    return (
                        <Card style={[gameStyles.game, gameStyles.card]} key={player.id}>
                            <Card.Title title={player.username} />

                            <Card.Content>
                                <View style={[gameStyles.flex,]}>
                                    <View style={{ flex: 2 }}>
                                        <SegmentedButtons
                                            style={gameStyles.buttons}
                                            value={value}
                                            onValueChange={setValue}
                                            buttons={[
                                                {
                                                    value: 'add three',
                                                    label: '+ 3',
                                                    uncheckedColor: colours.textSecondary,
                                                    checkedColor: colours.textSecondary,
                                                },
                                                {
                                                    value: 'add one',
                                                    label: '+ 1',
                                                    uncheckedColor: colours.textSecondary,
                                                    checkedColor: colours.textSecondary,
                                                },
                                            ]}
                                        />
                                    </View>

                                    <View style={{ flex: 1,  alignItems: 'center' }}>
                                        <Text style={gameStyles.score}>{player.score}</Text>
                                    </View>

                                    <View style={{ flex: 2 }}>
                                        <SegmentedButtons
                                            style={gameStyles.buttons}
                                            value={value}
                                            onValueChange={setValue}
                                            buttons={[
                                                {
                                                    value: 'remove one',
                                                    label: '- 1',
                                                    uncheckedColor: colours.textSecondary,
                                                    checkedColor: colours.textSecondary,
                                                },
                                                {
                                                    value: 'remove three',
                                                    label: '- 3',
                                                    uncheckedColor: colours.textSecondary,
                                                    checkedColor: colours.textSecondary,
                                                },
                                            ]}
                                        />
                                    </View>


                                </View>
                            </Card.Content>








                        </Card>
                    )
                })
            }
            <Button style={gameStyles.new} onPress={() => {
                setPlayers(players => [...players, { id: players.length, username: `Player${players.length}`, score: 0 }]);
            }}>Add new player</Button>
        </ScrollView >
    )
};



const gameStyles = StyleSheet.create({
    game: {
        backgroundColor: colours.backgroundNav,
    },
    card: {
        margin: 10,
    },
    buttons: {
        backgroundColor: colours.backgroundMain,
        borderRadius: 25,
        color: colours.textSecondary,
        justifyContent: 'center',

    },
    flex: {
        flexDirection: 'row',
    },
    score: {
        color: colours.textPrimary,
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',

    },
    new: {
        backgroundColor: colours.backgroundMain,
    },
    scroll: {
        marginBottom: 80,
    },

});





export default PlayGame;
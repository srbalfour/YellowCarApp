import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colours from '../constants/colours';
import { PaperProvider } from 'react-native-paper';
import { Card, Button, Text } from 'react-native-paper';
import React, { Component, useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';
import { ScrollView } from 'react-native';

const PlayGame = () => {
    const [players, setPlayers] = useState([
        { id: 0, username: "Player0", score: 0 },
        { id: 1, username: "Player1", score: 0 },
    ]);

    const [value, setValue] = React.useState('');           //for the segmented buttons

    return (
        <ScrollView style={gameStyles.scroll}>
            <View style={{ flex: 1, gap: 10, marginTop: 10, marginHorizontal: 10 }}>
                {
                    /* ***************************
                     * sort order players are displayed in based on ID
                     ******************************/

                    players.map((player) => {
                        return (
                            <Card style={[gameStyles.game]} key={player.id}>
                                <Card.Title titleVariant='titleLarge' titleStyle={{ alignSelf: 'center', color: colours.textPrimary, fontWeight: 'bold' }} title={player.username} />

                                <Card.Content>
                                    <View style={[gameStyles.flex]}>
                                        <View style={{ flex: 2 }}>
                                            <TouchableOpacity>
                                                <SegmentedButtons
                                                    style={gameStyles.buttons}
                                                    value={value}
                                                    onValueChange={setValue}
                                                    buttons={[
                                                        {
                                                            value: 'add three',
                                                            label: '+ 3',
                                                            style: {
                                                                backgroundColor: colours.backgroundMain,
                                                            },
                                                            uncheckedColor: colours.textSecondary,
                                                            checkedColor: colours.textSecondary,
                                                            onPress(event) {
                                                                setPlayers((players) => {
                                                                    const existingPlayers = players.filter(({ id }) => id !== player.id);
                                                                    const modPlayer = { ...player, score: player.score + 3 };
                                                                    return [...existingPlayers, modPlayer];
                                                                });
                                                            },
                                                        },
                                                        {
                                                            value: 'add one',
                                                            label: '+ 1',
                                                            style: {
                                                                backgroundColor: colours.backgroundMain,
                                                            },
                                                            uncheckedColor: colours.textSecondary,
                                                            checkedColor: colours.textSecondary,
                                                        },
                                                    ]}
                                                />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={gameStyles.score}>{player.score}</Text>
                                        </View>

                                        <View style={{ flex: 2 }}>
                                            <TouchableOpacity>
                                                <SegmentedButtons
                                                    style={gameStyles.buttons}
                                                    value={value}
                                                    onValueChange={setValue}
                                                    buttons={[
                                                        {
                                                            value: 'remove one',
                                                            label: '- 1',
                                                            style: {
                                                                backgroundColor: colours.backgroundMain,
                                                            },
                                                            uncheckedColor: colours.textSecondary,
                                                            checkedColor: colours.textSecondary,

                                                        },
                                                        {
                                                            value: 'remove three',
                                                            label: '- 3',
                                                            style: {
                                                                backgroundColor: colours.backgroundMain,
                                                            },
                                                            uncheckedColor: colours.textSecondary,
                                                            checkedColor: colours.textSecondary,
                                                        },
                                                    ]}
                                                />
                                            </TouchableOpacity>
                                        </View>


                                    </View>
                                </Card.Content>


                            </Card>
                        )
                    })
                }
                <TouchableOpacity>
                    <Button style={gameStyles.new} onPress={() => {
                        setPlayers(players => [...players, { id: players.length, username: `Player${players.length}`, score: 0 }]);
                    }}>Add new player</Button>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
};



const gameStyles = StyleSheet.create({
    game: {
        backgroundColor: colours.backgroundNav,
    },
    buttons: {
        borderRadius: 25,
        color: colours.textSecondary,
        justifyContent: 'center',
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    score: {
        color: colours.textPrimary,
        fontSize: 40,
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
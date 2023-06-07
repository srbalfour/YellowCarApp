import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colours from '../constants/colours';
import { IconButton, PaperProvider } from 'react-native-paper';
import { Card, Button, Text } from 'react-native-paper';
import React, { Component, useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';
import NewPlayer from '../components/NewPlayer';
import { SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import SegmentButtonMinus from '../components/SegmentButtonMinus';
import SegmentedButtonPlus from '../components/SegmentedButtonPlus';

export type Player = {
    id: number;
    username: string;
    score: number;
}

const PlayGame = () => {
    const [players, setPlayers] = useState<Player[]>([]);


    const [segmentedButtonValue, setSegmentedButtonValue] = React.useState('');           //for the segmented buttons
    const [newPlayerVisible, setNewPlayerVisible] = React.useState(false);

    const idAscending = [...players].sort((a, b) => a.id - b.id);       //sorts array so that players are in joining order



    return (
        <ScrollView style={gameStyles.scroll}>
            <View style={{ flex: 1, gap: 10, marginTop: 10, marginHorizontal: 10 }}>
                {

                    idAscending.map((player) => {
                        return (

                            <Card style={[gameStyles.game]} key={player.id}>

                                <Card.Title titleVariant='titleLarge' titleStyle={{ color: colours.textPrimary, fontWeight: 'bold' }} title={player.username}
                                    right={(props) => <TouchableOpacity {...props}>
                                        <IconButton icon="window-close" iconColor={colours.textSecondary} onPress={() => setPlayers((players) => {
                                            return players.filter((p) => p.id !== player.id)
                                        })} />
                                    </TouchableOpacity>} />

                                <Card.Content>
                                    <View style={[gameStyles.flex]}>
                                        <View style={{ flex: 2 }}>
                                          <SegmentedButtonPlus  player={player} segmentedButtonValue={segmentedButtonValue} setSegmentedButtonValue={setSegmentedButtonValue} setPlayers={setPlayers} />
                                        </View>

                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={gameStyles.score}>{player.score}</Text>
                                        </View>

                                        <View style={{ flex: 2 }}>
                                            <SegmentButtonMinus player={player} segmentedButtonValue={segmentedButtonValue} setSegmentedButtonValue={setSegmentedButtonValue} setPlayers={setPlayers} />
                                        </View>


                                    </View>
                                </Card.Content>


                            </Card>
                        )
                    })
                }

                <TouchableOpacity>
                    <Button style={gameStyles.new} onPress={() => {
                        setNewPlayerVisible(true);
                    }} textColor={colours.textPrimary}>Add new player</Button>
                </TouchableOpacity>

                <NewPlayer visible={newPlayerVisible} setPlayers={setPlayers} onClose={() => setNewPlayerVisible(false)}></NewPlayer>

            </View>
        </ScrollView>
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
        colour: colours.textPrimary,

    },
    scroll: {
        marginBottom: 80,
    },
});





export default PlayGame;
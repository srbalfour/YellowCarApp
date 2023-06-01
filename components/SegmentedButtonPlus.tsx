import { StyleSheet, TouchableOpacity } from 'react-native';
import colours from '../constants/colours';
import React from 'react';
import { SegmentedButtons } from 'react-native-paper';
import { Player } from '../Pages/YellowCarGame';

interface Props {
    segmentedButtonValue: string;
    player: Player;
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>
    setSegmentedButtonValue: React.Dispatch<React.SetStateAction<string>>;
}

const SegmentButtonPlus = ({ player, segmentedButtonValue, setSegmentedButtonValue, setPlayers }: Props) => {
    const incrementScore = (increment: number) => {
        setPlayers((players) => {
            const existingPlayers = players.filter(({ id }) => id !== player.id);
            const modPlayer = { ...player, score: player.score + increment };
            return [...existingPlayers, modPlayer];
        });
    }

    return (
        <TouchableOpacity>
            <SegmentedButtons
                style={buttonStylesPlus.buttons}
                value={segmentedButtonValue}
                onValueChange={setSegmentedButtonValue}
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
                            incrementScore(3)
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
                        onPress(event) {
                            incrementScore(1)
                        },
                    },
                ]}
            />
        </TouchableOpacity>
    )
}

const buttonStylesPlus = StyleSheet.create({
    buttons: {
        borderRadius: 25,
        color: colours.textSecondary,
        justifyContent: 'center',
    },

});

export default SegmentButtonPlus;
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

const SegmentButtonMinus = ({ player, segmentedButtonValue, setSegmentedButtonValue, setPlayers }: Props) => {
    const decrementScore = (decrement: number) => {
        setPlayers((players) => {
            const existingPlayers = players.filter(({ id }) => id !== player.id);
            const modPlayer = { ...player, score: player.score - decrement };
            return [...existingPlayers, modPlayer];
        });
    }

    return (
        <TouchableOpacity>
            <SegmentedButtons
                style={buttonStylesMinus.buttons}
                value={segmentedButtonValue}
                onValueChange={setSegmentedButtonValue}
                buttons={[
                    {
                        value: 'remove one',
                        label: '- 1',
                        style: {
                            backgroundColor: colours.backgroundMain,
                        },
                        uncheckedColor: colours.textSecondary,
                        checkedColor: colours.textSecondary,
                        onPress(event) {
                            decrementScore(1)
                        },
                    },
                    {
                        value: 'remove three',
                        label: '- 3',
                        style: {
                            backgroundColor: colours.backgroundMain,
                        },
                        uncheckedColor: colours.textSecondary,
                        checkedColor: colours.textSecondary,
                        onPress(event) {
                            decrementScore(3)
                        },
                    },
                ]}
            />
        </TouchableOpacity>
    )
}

const buttonStylesMinus = StyleSheet.create({
    buttons: {
        borderRadius: 25,
        color: colours.textSecondary,
        justifyContent: 'center',
    },

});

export default SegmentButtonMinus;

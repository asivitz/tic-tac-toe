import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles/main';

export default class GameBlock extends React.Component {
    whenPressed(){
        if(this.props.enabled == true){
            // Calls parent function GameBoard
            this.props.whenPressed({x: this.props.x, y: this.props.y});
        }else{
            console.log("Game over.");
        }
    }
    render() {
        return (
            <TouchableHighlight
                style={styles.GameBlock}
                onPress={() => this.whenPressed()}
            >
                <Text style={styles.GameBlockText}>{this.props.player}</Text>
            </TouchableHighlight>
        );
    }
}


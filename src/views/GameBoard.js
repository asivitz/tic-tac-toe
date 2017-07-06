import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/main';
import GameBlock from '../components/GameBlock';


export default class Board extends React.Component {
    render() {

        // Denotes board not set
        var i = -1;

        return (
            <View style={[styles.GameBoard, styles.row]}>
                <View style={styles.col}>
                    {this.props.gameBoard.map(function(row){
                        ++i;

                        // Denotes board not set
                        var j = -1;
                        return (
                            <View style={styles.row}>
                                {row.map(function(block){
                                    ++j;
                                    return <GameBlock player={block} enabled={this.props.enabled} whenPressed={this.props.doUpdate} x={j} y={i}/>;
                                }, this)}
                            </View>
                        );
                    }, this)}
                </View>
            </View>
        );
    }
}


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/main';

export default class HeaderBlock extends React.Component {
    render() {
        return (
            <View style={styles.HeaderBlock}>
                <Text style={styles.HeaderBlockText}>{(this.props.enabled) ? "Current Player" : "Winner is "}</Text>
                <Text style={styles.GameBlockText}>{this.props.currentPlayer}</Text>
            </View>
        );
    }
}


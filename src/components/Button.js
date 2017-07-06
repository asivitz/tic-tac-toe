import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles/main';


export default class Button extends React.Component {
    whenPressed(){
        console.log("Pressed: ", this.props.title);

        // Calls parent function (Parent App.js)
        this.props.whenPressed();
    }
    render() {
        return (
            <TouchableHighlight
                style={[styles.Button, {backgroundColor: this.props.bg}]}
                onPress={() => this.whenPressed()}
            >
                <Text style={styles.ButtonText}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
}


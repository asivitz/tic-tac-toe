import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles/main';
import HeaderBlock from './src/components/HeaderBlock';
import GameBoard from './src/views/GameBoard';
import Button from './src/components/Button';
import Config from './src/config/main';
import GameLogic from './src/GameLogic/main';


export default class App extends React.Component {
  constructor(props){
      super(props);

      this.GameLogic = new GameLogic(Config.waysToWin);
      this.state = this.getNewGameState();
  }

  getNewGameState(){
    // JS Quirk
    var localConf = JSON.parse(JSON.stringify(Config));
    return {
      player: localConf.startingPlayer,
      gameBoard: JSON.parse(JSON.stringify(localConf.gameBoard)),
      enabled: true
    };
  }

  newGame(){
    this.setState(this.getNewGameState);
    this.forceUpdate();
  }

  // updates board
  updateGame(location) {
    // Set gameboard and update it, then changes player
    var board = this.state.gameBoard;
    board[location.y][location.x] = this.state.player;

    var didWin = this.GameLogic.runTest(board, location);

    if(didWin > 0){
      this.setState({
        enabled: false
      });

    }else{
      this.changePlayer();
    }
  }

  // Updates current player
  changePlayer() {
    this.setState({
      player: (this.state.player == "X" ? "O" : "X")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBlock
            enabled={this.state.enabled}
            currentPlayer={this.state.player}
        />
        <GameBoard
            enabled={this.state.enabled}
            gameBoard={this.state.gameBoard}
            doUpdate={(coordinates) => this.updateGame(coordinates)}
        />
        <Button
            bg="green"
            title="New Game"
            whenPressed={() => this.newGame()}
        />
      </View>
    );
  }
}


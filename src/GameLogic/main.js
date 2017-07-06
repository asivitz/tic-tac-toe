import FourCorners from './FourCorners';
import Line from './Line';
import TwoByTwo from './TwoByTwo';

// Pass imports into an array
var winningTests = {
    "FourCorners": FourCorners,
    "Line": Line,
    "TwoByTwo": TwoByTwo
};

export default class GameLogic {
    constructor(waysToWin) {
        this.waysToWin = waysToWin;
    }

    runTest(gameBoard, location){
        console.log("Begin Tests");

        // Get the amount of wins from all tests
        var wins = this.waysToWin.reduce(function(result, way){
            return result + (winningTests[way](gameBoard, location) );
        }, 0);
        return wins > 0 ? 1 : 0;
    }
}


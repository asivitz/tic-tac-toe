export default function Line(gameBoard, location) {

    testList = [
        checkHorizontal,
        checkVertical,
        checkDiagonal,
        checkInverseDiagonal
    ];

    // Get the amount of wins from all tests
    var foundWins = testList.reduce(function(sum, test){
        return sum + test(gameBoard, location);
    }, 0);

    return (foundWins > 0 ? 1 : 0);
}

function checkInverseDiagonal(gameBoard, location){
    var length = getBoardWidth(gameBoard)  - 1;
    var count = 0;
    var firstChar = gameBoard[length][0];
    if(firstChar){
        for(var i = 0; i < getBoardWidth(gameBoard); i++){
            if(firstChar == gameBoard[length - i][i]){
                count++;
            }
        }
    }

    return getBoardWidth(gameBoard) == count ? 1 : 0;
}

function checkDiagonal(gameBoard, location){
    var length = getBoardWidth(gameBoard)  - 1;
    var count = 0;
    var firstChar = gameBoard[length][length];
    if(firstChar) {
        for (var i = 0; i < getBoardWidth(gameBoard); i++) {
            if (firstChar == gameBoard[i][i]) {
                count++;
            }
        }
    }

    return getBoardWidth(gameBoard) == count ? 1 : 0;
}

function checkVertical(gameBoard, location){
    var count = 0;
    var firstChar = gameBoard[0][location.x];
    if(firstChar) {
        for (var i = 0; i < getBoardWidth(gameBoard); i++) {
            if (firstChar == gameBoard[i][location.x]) {
                count++;
            }
        }
    }

    return getBoardWidth(gameBoard) == count ? 1 : 0;
}

function checkHorizontal(gameBoard, location){
    var count = 0;
    var firstChar = gameBoard[location.y][0];
    if(firstChar) {
        for (var i = 0; i < getBoardWidth(gameBoard); i++) {
            if (firstChar == gameBoard[location.y][i]) {
                count++;
            }
        }
    }

    return getBoardWidth(gameBoard) == count ? 1 : 0;
}

function getBoardWidth(gameBoard){
    return gameBoard[0].length;
}
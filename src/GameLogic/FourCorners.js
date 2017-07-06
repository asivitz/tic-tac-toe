export default function FourCorners(gameBoard, location) {
    console.log("Four Corners: ", gameBoard);

    var boardHeight = gameBoard.length - 1;
    var boardWidth = gameBoard[0].length - 1;

    var topLeft = gameBoard[0][0];
    var topRight = gameBoard[0][boardWidth];
    var bottomLeft = gameBoard[boardHeight][0];
    var bottomRight = gameBoard[boardHeight][boardWidth];

    if(
        topLeft
        && topLeft == topRight
        && topLeft == bottomLeft
        && topLeft == bottomRight
    ){
        return 1;
    }else{
        return 0;
    }
}
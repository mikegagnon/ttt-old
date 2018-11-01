TURN = 1;

var PLAYED_CELL = new Array(9);

var GAME_OVER = false;

function cellClick(cellNumber) {

    if (GAME_OVER || PLAYED_CELL[cellNumber] == 1 || PLAYED_CELL[cellNumber] == 2) {
        return;
    }

    var imgTag = getImgTag(TURN);
    $(".cell").eq(cellNumber).append(imgTag);
    PLAYED_CELL[cellNumber] = TURN;

    GAME_OVER = checkForVictory(1) || checkForVictory(2);

    if (GAME_OVER) {
        if (TURN == 1) {
            alert("Player X wins!");
        } else {
            alert("Player O wins!");
        }
    }

    if (TURN == 1) {
        TURN = 2;
    } else {
        TURN = 1;
    }
}

function getImgTag(player) {
    var filename;
    if (player == 1) {
        filename = "img/player-x.png";
    } else {
        filename = "img/player-o.png";
    }
    return "<img src='" + filename + "'>";
}

function checkForVictory(player) {
    return (PLAYED_CELL[0] == player && PLAYED_CELL[1] == player && PLAYED_CELL[2] == player) ||
        (PLAYED_CELL[3] == player && PLAYED_CELL[4] == player && PLAYED_CELL[5] == player) ||
        (PLAYED_CELL[6] == player && PLAYED_CELL[7] == player && PLAYED_CELL[8] == player) ||
        (PLAYED_CELL[0] == player && PLAYED_CELL[3] == player && PLAYED_CELL[6] == player) ||
        (PLAYED_CELL[1] == player && PLAYED_CELL[4] == player && PLAYED_CELL[7] == player) ||
        (PLAYED_CELL[2] == player && PLAYED_CELL[5] == player && PLAYED_CELL[8] == player) ||
        (PLAYED_CELL[0] == player && PLAYED_CELL[4] == player && PLAYED_CELL[8] == player) ||
        (PLAYED_CELL[6] == player && PLAYED_CELL[4] == player && PLAYED_CELL[2] == player);
}

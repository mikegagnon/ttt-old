TURN = 1;

var PLAYED_CELL = new Array(9);

function cellClick(cellNumber) {

    if (PLAYED_CELL[cellNumber] == 1 || PLAYED_CELL[cellNumber] == 2) {
        return;
    }

    var cellId = "#cell-" + cellNumber;
    var imgTag = getImgTag(TURN);
    $(cellId).append(imgTag);
    PLAYED_CELL[cellNumber] = TURN;
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

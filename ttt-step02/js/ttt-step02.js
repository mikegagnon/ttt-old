TURN = 1;

function cellClick(cellNumber) {
    var imgTag = getImgTag(TURN);
    $(".cell").eq(cellNumber).append(imgTag);
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

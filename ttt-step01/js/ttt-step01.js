TURN = 1;

function cellClick(cellNumber) {
    if (TURN == 1) {
        $(".cell").eq(cellNumber).text("X");
        TURN = 2;
    } else {
        $(".cell").eq(cellNumber).text("O");
        TURN = 1;
    }
}
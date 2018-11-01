TURN = 1;

function cellClick(cellNumber) {
    if (TURN == 1) {
        $(".cell").eq(cellNumber).text("x");
        TURN = 2;
    } else {
        $(".cell").eq(cellNumber).text("o");
        TURN = 1;
    }
}
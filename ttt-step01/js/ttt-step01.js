TURN = 1;

function cellClick(cellNumber) {
    var cellId = "#cell-" + cellNumber;
    if (TURN == 1) {
        $(cellId).text("x");
        TURN = 2;
    } else {
        $(cellId).text("o");
        TURN = 1;
    }
}
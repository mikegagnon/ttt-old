TURN = 1;

function cellClick() {
    var cellNumber = $(this).data("cell-number");
    if (TURN == 1) {
        $(".cell").eq(cellNumber).text("X");
        TURN = 2;
    } else {
        $(".cell").eq(cellNumber).text("O");
        TURN = 1;
    }
}

$(".cell").click(cellClick);
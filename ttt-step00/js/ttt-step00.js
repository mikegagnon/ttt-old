
function cellClick() {
    //var cellNumber = $(this).data("cell-number");
    // /$(".cell").eq(cellNumber).text("X");
    $(this).text("X");
}

$(".cell").click(cellClick);
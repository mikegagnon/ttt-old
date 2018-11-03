
class TicTacToe {

    constructor(firstPlayer, divId) {
        this.divId = divId;
        this.turn = firstPlayer;
        this.playedCell = new Array(9);
        this.gameOver = false;

        var innerHtml = `
            <div class="row">
              <div class="cell" data-cell-number="0"></div>
              <div class="cell" data-cell-number="1"></div>
              <div class="cell" data-cell-number="2"></div>
            </div>
            <div class="row">
              <div class="cell" data-cell-number="3"></div>
              <div class="cell" data-cell-number="4"></div>
              <div class="cell" data-cell-number="5"></div>
            </div>
            <div class="row">
              <div class="cell" data-cell-number="6"></div>
              <div class="cell" data-cell-number="7"></div>
              <div class="cell" data-cell-number="8"></div>
            </div>`

        var divHtml = "<div id='" + this.divId + "'>" + innerHtml + "</div>"
        $("body").append(divHtml)
        $("#" + this.divId + " .cell").click(this, function(event) {
            event.data.cellClick($(this).data("cell-number"));
        })
    }

    cellClick(cellNumber) {

        if (this.gameOver || this.playedCell[cellNumber] == 1 || this.playedCell[cellNumber] == 2) {
            return;
        }

        var imgTag = getImgTag(this.turn);
        $("#" + this.divId + " .cell").eq(cellNumber).append(imgTag);
        this.playedCell[cellNumber] = this.turn;

        this.gameOver = this.checkForVictory(1) || this.checkForVictory(2);

        if (this.gameOver) {
            if (this.turn == 1) {
                alert("Player X wins!");
            } else {
                alert("Player O wins!");
            }
        }

        if (this.turn == 1) {
            this.turn = 2;
        } else {
            this.turn = 1;
        }
    }

    checkForVictory(player) {
        return (this.playedCell[0] == player && this.playedCell[1] == player && this.playedCell[2] == player) ||
            (this.playedCell[3] == player && this.playedCell[4] == player && this.playedCell[5] == player) ||
            (this.playedCell[6] == player && this.playedCell[7] == player && this.playedCell[8] == player) ||
            (this.playedCell[0] == player && this.playedCell[3] == player && this.playedCell[6] == player) ||
            (this.playedCell[1] == player && this.playedCell[4] == player && this.playedCell[7] == player) ||
            (this.playedCell[2] == player && this.playedCell[5] == player && this.playedCell[8] == player) ||
            (this.playedCell[0] == player && this.playedCell[4] == player && this.playedCell[8] == player) ||
            (this.playedCell[6] == player && this.playedCell[4] == player && this.playedCell[2] == player);
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

var ttt1 = new TicTacToe(1, "ttt1");
var ttt2 = new TicTacToe(2, "ttt2");

function cellClick(cellNumber) {
    ttt.cellClick(cellNumber);
}
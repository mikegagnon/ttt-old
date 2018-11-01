

class TicTacToe {

    constructor(boardDivId, firstPlayer) {
        this.boardDivId = boardDivId;
        this.turn = firstPlayer;
        this.playedCell = new Array(9);
        this.gameOver = false;
    }

    cellClick(cellNumber) {

        if (this.gameOver || this.playedCell[cellNumber] == 1 || this.playedCell[cellNumber] == 2) {
            return;
        }

        var cellId = "#" this.board"cell-" + cellNumber;
        var imgTag = getImgTag(this.turn);
        $(cellId).append(imgTag);
        this.playedCell[cellNumber] = this.turn;

        this.gameOver = checkForVictory(1) || checkForVictory(2);

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

    getImgTag(player) {
        var filename;
        if (player == 1) {
            filename = "img/player-x.png";
        } else {
            filename = "img/player-o.png";
        }
        return "<img src='" + filename + "'>";
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

val ttt = new TicTacToe(1)
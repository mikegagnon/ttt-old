
class TicTacToe {

    constructor(firstPlayer) {
        this.divId = "div" + Math.floor(Math.random() * 99999999) + 1;
        this.turn = firstPlayer;
        this.playedCell = new Array(9);
        this.gameOver = false;

        var innerHtml = `
            <button class="row">Copy</button>
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
            </div>
            <div class="row">`


        var divHtml = "<div id='" + this.divId + "' style='position: absolute;'><div id='" + this.divId + "header' style=''>Drag me</div>" + innerHtml + "</div>"
        $("body").append(divHtml)
        $("#" + this.divId + " button").click(this, function(event) {
            //alert("Copy: " + event.data.divId);
            var newTTT = event.data.deepCopy();

        });
        $("#" + this.divId + " .cell").click(this, function(event) {
            event.data.cellClick($(this).data("cell-number"));
        });

        dragElement(document.getElementById(this.divId));

    }

    deepCopy() {
        var newTTT = new TicTacToe(this.turn);
        for (var i = 0; i < this.playedCell.length; i++) {
            var turn = this.playedCell[i];
            if (turn) {
                newTTT.turn = turn;
                newTTT.cellClick(i);
            }
            //newTTT.playedCell[i] = this.playedCell[i];

        }

        newTTT.turn = this.turn;

        return newTTT;
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

var ttt1 = new TicTacToe(1);
//var ttt2 = new TicTacToe(2, "ttt2");

function cellClick(cellNumber) {
    ttt.cellClick(cellNumber);
}


// https://www.w3schools.com/howto/howto_js_draggable.asp
//dragElement(document.getElementById(ttt1.divId));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

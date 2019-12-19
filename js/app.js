var letters = document.getElementsByClassName("letter");
var winner = document.getElementById("winner")
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click",function () {
        game(this);
    });
};

function game(block) {
    if (block.innerText) {
        return;
    }

    var turn;

    this.player = !this.player

    if (player) {
        turn = "X"
    } else {
        turn = "O"
    }
    block.innerText = turn;

    var tile0 = letters[0].textContent 
    var tile1 = letters[1].textContent
    var tile2 = letters[2].textContent
    var tile3 = letters[3].textContent
    var tile4 = letters[4].textContent
    var tile5 = letters[5].textContent
    var tile6 = letters[6].textContent
    var tile7 = letters[7].textContent
    var tile8 = letters[8].textContent

    const winLines = [
        [tile0, tile1, tile2],
        [tile3, tile4, tile5],
        [tile6, tile7, tile8],
        [tile0, tile3, tile6],
        [tile1, tile4, tile7],
        [tile2, tile5, tile8],
        [tile0, tile4, tile8],
        [tile2, tile4, tile6]
      ];
      for (let i = 0; i < winLines.length; i++) {
        const [a,b,c] = winLines[i];
        console.log(a);
        
        if (a && b && c && a === b && a === c) {
            winner.innerText = `${turn} wins`
            console.log(`${turn} wins`);
          return [block[a], winLines[i]];
          
        }
      }
};
// Reset
function restart() {
    window.location.reload();
};
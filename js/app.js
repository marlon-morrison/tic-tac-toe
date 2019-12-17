var letters = document.getElementsByClassName("letter");
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click",function () {
        game(this);
    });
};
var p1 = true;

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
    console.log(letters[0].textContent);
    if (letters[0].textContent && letters[3].textContent && letters[6].textContent === "X") {
        alert("X Wins")
    } else if (letters[1].textContent && letters[4].textContent && letters[7].textContent === "X") {
        alert("X Wins")
    } else if (letters[2].textContent && letters[5].textContent && letters[8].textContent === "X") {
        alert("X Wins")
    } else if (letters[0].textContent && letters[1].textContent && letters[2].textContent === "X") {
        alert("X Wins")
    } else if (letters[3].textContent && letters[4].textContent && letters[5].textContent === "X") {
        alert("X Wins")
    } else if (letters[6].textContent && letters[7].textContent && letters[8].textContent === "X") {
        alert("X Wins")
    } else if (letters[0].textContent && letters[4].textContent && letters[8].textContent === "X") {
        alert("X Wins")
    } else if (letters[2].textContent && letters[4].textContent && letters[6].textContent === "X") {
        alert("X Wins")
    }
};

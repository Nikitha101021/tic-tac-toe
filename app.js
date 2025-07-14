let boxes = document.querySelectorAll(".box"); 
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "blue"; 
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red"; 
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`; 
    msgContainer.classList.remove("hide");

    boxes.forEach((box) => box.disabled = true);
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                return;
            }
        }
    }
};
const resetGame = () => {
    turnO = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);



/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let Turn;
let Board;
let Winner;
let Tie;

/*------------------------ Cached Element References ------------------------*/
const msgel=document.getElementById("message");

//for selecting all square elements
const sqrel = document.querySelectorAll('.sqr');


        
/*----------------------------- Event Listeners -----------------------------*/
 
    
    
sqrel.forEach(function(square) {
  
  square.addEventListener('click', function(event) {

    event.currentTarget.textContent = Turn;
    console.log("sqr is clicked")

    if (Turn === 'X') {
      Turn = 'O';
      msgel.textContent = "It's O Turn";
    } else {
      Turn = 'X';
      msgel.textContent = "It's X Turn";
    }

  });

});


/*-------------------------------- Functions --------------------------------*/

function init(){
  console.log("init function is being called successfully!");
  
  board = ['', '', '', '', '', '', '', '', ''];
  
  Turn = "X";
  Winner = false;
  Tie = false;

  render();
}
init();

function render() {
  updateBoard();    
}

function updateBoard() {
  board.forEach((cell, index) => {
    const square = sqrel[index];
    
    if (cell === 'X') {
      square.textContent = 'X';
    } else if (cell === 'O') {
      square.textContent = 'O';
    } else {
      square.textContent = '';
    }
  });
}

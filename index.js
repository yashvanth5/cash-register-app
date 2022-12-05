const billAmount = document.querySelector("#input-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".numb-notes");

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener ("click" , function validateBillAndCashAmount(){
  hideMessage();
  if (billAmount.value > 0) {
  if (cashGiven.value >= billAmount.value ){
    const amountToBeReturned = cashGiven.value - billAmount.value;
    calculateChange(amountToBeReturned );

  } else {
    showMessage ("the cash provided should be alteast equal to bill amount")
    
  }

  } else {
    // message.style.display = "block";
    // message.innerText = "The bill amount should be greater than zero";
    showMessage("invalid bill amount");
  }

} );

function calculateChange (amountToBeReturned){
  for(let i = 0 ; i < availableNotes.length ; i++ ) {
 const numberOfNotes = Math.trunc
 ( amountToBeReturned / availableNotes[i] 
 );
  amountToBeReturned %= availableNotes[i];
  noOfNotes[i].innerText = numberOfNotes;
  

  }
  
 
}
function hideMessage(){

  message.style.display = "none";
}

function showMessage(msg){
  message.style.display = "block";
    message.innerText = msg;
}

// made this mistake :
// I changed the selector of noOfNotes to 'document.querySelectorAll(".numb-notes")' to select all elements with the numb-notes class instead of just one.
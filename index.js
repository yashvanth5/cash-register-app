const billAmount = document.querySelector("#input-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

console.log(cashGiven.value);




checkButton.addEventListener ("click" , function validateBillAndCashAmount(){
  message.style.display = "none";

 if (billAmount.value > 0) {
  if (cashGiven.value ≥ billAmount.value ){

  } else {
    showMessage("the cash provided should be alteast equal to bill amount")
    
  }

  } else {
    // message.style.display = "block";
    // message.innerText = "The bill amount should be greater than zero";
    showMessage("invalid bill amount");
  }

} );

function showMessage(message){
  message.style.display = "block";
    message.innerText = message;
}
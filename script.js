const form = document.getElementById("theForm");
const totalAmount = document.getElementById("amt");
const tip = document.getElementById("tip");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if(totalAmount.value.length == 0){
    messages.push("Did not enter the amount")
    console.log("1");
  }
  else if(tip.value == 0){
    messages.push("Did not enter tip amount");
    console.log("2");
  }
  else{
    var amount = +totalAmount.value;
    var tipValue = 1 + ((+tip.value)/100);
    var formula = amount + tipValue;
    messages.push("Total amount to pay: $" + formula);
    console.log("3");
  }

  errorElement.innerText = messages.join(', ');
});

function createButtons() {
  let number = document.getElementById("number_buttons").value;
  let winning_button = Math.ceil(Math.random() * number);
  for (let i = 1; i <= number; ++i) {
    const button = document.createElement("button");
    button.innerHTML = "<b>Button</b>"; 
    button.id = "i";
   	document.getElementById("body").appendChild(button);
   	button.onclick = function() {
      if (winning_button == this.id) {
    	  alert("Congratulation!You won!")
      } else {
        alert("Sorry!You lost!")
      }
    }
  }
}

function ageinDays() {
  var getAge = prompt("Hey!.. What is your Date of Birth");
  let yeartoDays = (2020 - getAge) * 365;
  let h1 = document.createElement("h1");
  let text = document.createTextNode("You are " + yeartoDays + " Days old");
  h1.setAttribute("id", "retValue");
  h1.appendChild(text);
  document.getElementById("result").appendChild(h1);
}

function reset(){
    document.getElementById('retValue').remove();
}
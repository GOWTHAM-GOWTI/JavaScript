let allColors = document.getElementsByTagName("button");
// console.log(allColors);

let allButtons = [];
for (let i = 0; i < allColors.length; i++) {
  allButtons.push(allColors[i].classList[0]);
}
// console.log(allButtons);

function changeColor(button) {
  if (button.value === "yellow") {
    yellowColor();
  } else if (button.value === "red") {
    redColor();
  } else if (button.value === "blue") {
    blueColor();
  } else if (button.value === "reset") {
    reset();
  } else {
    random();
  }
}

function yellowColor() {
  for (let i = 0; i < allColors.length; i++) {
    allColors[i].classList.remove(allColors[i].classList[0]);
    allColors[i].classList.add("yellow");
  }
}

function redColor() {
  for (let i = 0; i < allColors.length; i++) {
    allColors[i].classList.remove(allColors[i].classList[0]);
    allColors[i].classList.add("red");
  }
}
function blueColor() {
  for (let i = 0; i < allColors.length; i++) {
    allColors[i].classList.remove(allColors[i].classList[0]);
    allColors[i].classList.add("blue");
  }
}

function reset() {
  let count = 0;
  for (let i = 0; i < allColors.length; i++) {
    allColors[i].classList.remove(allColors[i].classList[0]);
    allColors[i].classList.add(allButtons[count]);
    count++;
  }
}
function random() {
  let clrList = [];
  for (let i = 0; i < 3; i++) {
    let rando = ["yellow", "blue", "red"][Math.floor(Math.random(0 - 2) * 3)];
    clrList.push(rando);
  }let count = 0;
  for (let i = 0; i < allColors.length; i++) {
    allColors[i].classList.remove(allColors[i].classList[0]);
    allColors[i].classList.add(clrList[count]);
    count++;
  }

}

// function random() {}

// function changeColor(button) {
//   let color = console.log(button.value);

//   // if (color === 0) {
//   // console.log(color);
//   // } else {
//   //   document.getElementsByTagName("button").innerHTML =
//   //     "style='background-color:'+ (color)+ ' '";
//   //   console.log(color);
//   // }
// }

var name = prompt("What is your name?");
document.getElementById("welcome").innerHTML =
  "Welcome to the Javascript Playtest,  " + name + ".";

function displayDate() {
  document.getElementById("now").innerHTML = Date();
}

/* why is the add function so complicated??? */

function add() {
  var num1, num2, sum;
  num1 = parseInt(document.getElementById("number1").value);
  num2 = parseInt(document.getElementById("number2").value);
  sum = num1 + num2;
  document.getElementById("answer").innerHTML = sum;
}

function subtract() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  document.getElementById("answer").innerHTML = num1 - num2;
}

function multiply() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  document.getElementById("answer").innerHTML = num1 * num2;
}

function divide() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  if (num2 == 0) {
    document.getElementById("answer").innerHTML =
      "NaN = Cannot divide by zero :(";
  } else {
    document.getElementById("answer").innerHTML = num1 / num2;
  }
}

function verify() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  while (password1 != password2) {
    password2 = prompt(
      "Passwords do not match. Please confirm the correct password:"
    );
  }
}

function show() {
  var p1 = document.getElementById("password1");
  var p2 = document.getElementById("password2");
  if (p1.type === "password") {
    p1.type = "text";
    p2.type = "text";
  } else {
    p1.type = "password";
    p2.type = "password";
  }
}

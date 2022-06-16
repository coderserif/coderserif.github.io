function webl() {
  var y = document.getElementById("buttonwebl");
  var x = document.getElementById("webl");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "Show All";
  } else {
    x.style.display = "block";
    y.innerHTML = "Hide All";
  }
}

function recl() {
  var y = document.getElementById("buttonrecl");
  var x = document.getElementById("recl");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "Show Recipes";
  } else {
    x.style.display = "block";
    y.innerHTML = "Hide Recipes";
  }
}

function genl() {
  var y = document.getElementById("buttongenl");
  var x = document.getElementById("genl");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "Show Generators";
  } else {
    x.style.display = "block";
    y.innerHTML = "Hide Generators";
  }
}

function gaml() {
  var y = document.getElementById("buttongaml");
  var x = document.getElementById("gaml");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "Show Games";
  } else {
    x.style.display = "block";
    y.innerHTML = "Hide Games";
  }
}

function misl() {
  var y = document.getElementById("buttonmisl");
  var x = document.getElementById("misl");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "Show Misc";
  } else {
    x.style.display = "block";
    y.innerHTML = "Hide Misc";
  }
}


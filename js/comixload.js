var comix = {};
var comixsetting = {};

fetch("/json/comixsettings.json")
  .then((response) => response.json())
  .then((json) => {
    comixsetting = json;
    load(comixsetting);
  })
  .catch((error) => {
    alert(
      "Failed to load comixsettings, Error Message:\n" +
        error +
        "\n\nTry Reloading..."
    );
    document.getElementById("comix").innerHTML = "Data Failed To Load :(<br>";
  });

function load(comixsetting) {
  const params = new URLSearchParams(document.location.search);
  var div = document.createElement("center");
  div.setAttribute("id", "comix");
  document.getElementById("body").appendChild(div);

  var text = document.createElement("h2");
  fetch(comixsetting.folder + "/json/" + params.get("comix") + ".json")
    .then((response) => response.json())
    .then((json) => {
      comix = json;
      text.innerHTML = comix.title;
    })
    .catch((error) => {
      alert(
        "Failed to load comix.json, Error Message:\n" +
          error +
          "\n\nTry Reloading..."
      );
      document.getElementById("comix").innerHTML = "Data Failed To Load :(<br>";
    });
  document.getElementById("comix").appendChild(text);

  var img = document.createElement("img");
  img.setAttribute(
    "src",
    comixsetting.folder + "/img/" + params.get("comix") + ".png"
  );
  img.setAttribute("width", "500px");
  document.getElementById("comix").appendChild(img);

  var desc = document.createElement("p");
  fetch(comixsetting.folder + "/json/" + params.get("comix") + ".json")
    .then((response) => response.json())
    .then((json) => {
      comix = json;
      desc.innerHTML = comix.desc;
    })
    .catch((error) => {
      alert(
        "Failed to load comix.json, Error Message:\n" +
          error +
          "\n\nTry Reloading..."
      );
      document.getElementById("comix").innerHTML = "Data Failed To Load :(<br>";
    });
  document.getElementById("comix").appendChild(desc);
  for (let i = 0; i < 2; i++) {
    var link = document.createElement("a");
    link.setAttribute("id", "arrow" + i);
    if (i == 0) {
      link.setAttribute(
        "href",
        "comix?comix=" + (parseInt(params.get("comix")) - 1)
      );
      if (params.get("comix") < 1) {
        arrowmax = false;
      } else {
        arrowmax = true;
      }
    } else {
      link.setAttribute(
        "href",
        "comix?comix=" + (parseInt(params.get("comix")) + 1)
      );
      if (params.get("comix") > comixsetting.max - 2) {
        arrowmax = false;
      } else {
        arrowmax = true;
      }
    }
    document.getElementById("body").appendChild(link);
    if (arrowmax) {
      var arrow = document.createElement("img");
      if (i == 0) {
        arrow.setAttribute("align", "left");
      } else {
        arrow.setAttribute("align", "right");
      }
      arrow.setAttribute("src", "comix/img/arrow" + i + ".png");
      document.getElementById("arrow" + i).appendChild(arrow);
    }
  }
}

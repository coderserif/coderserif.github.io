var randomDialogue = [
    "I have heard about you",
    "You, the sneaky one...",
    "You think you can fool me?",
    "You are deeply mistaken",
    "Go away!",
    "I should have hid this room better...",
    "You're not supposed to be in here...",
    "RubRub won't like this...",
    "zzzZZZZ...",
    "Don't touch that!",
    "Why you touch my stuff?",
    "RubRub better not find you in here...",
    "Can't you just leave?",
    "This is not the room you are looking for...",
    "Sneaky sneaky...",
    "It's my precious...",
    "You shall not pass!",
    "Don't push the button!",
    "You're gonna get me in trouble...",
    "This is getting ridiculus...",
    "Go collect some stars",
    "Maybe there are new levels?",
    "Just, stop bothering me",
    "I'm gonna stop talking",
    "...",
    "......",
    "GAH!",
    "You're hopeless...",
    "Really, still here?",
    "Fine, press the button",
  ];

var randomDialogueDoor = [
  "RubRub told me to not let anyone in.",
  "Stop",
  "I won't allow it.",
  "Player used knock, it isn't very effective...",
  "No. Entry.",
  "I've been there once. Very creepy.",
  "You can't just waltz in."
]

var randomDialogueChall = [
  "Here's the ID: 27470817",
  "The ID is: 27470817",
  "Hope you like it! 27470817",
  "It's really good trust me: 27470817",
  "I made it myself! 27470817",
  "RubRub never gave me creator points... 27470817"
]

function loadChall() {
  var x = document.getElementById("challenge");
  x.style.display = "none";
}

function displayDialogueDoor() {
  document.getElementById("dialogue").innerHTML = randomDialogueDoor[Math.floor(Math.random() * randomDialogueDoor.length)];
}

function displayDialogueChall() {
  document.getElementById("dialogue").innerHTML = randomDialogueChall[Math.floor(Math.random() * randomDialogueChall.length)];
}


function displayDialogueRandom() {
    inputVal = document.getElementById("inputId").value;
    if (inputVal === "secret") {
      document.getElementById("dialogue").innerHTML = "You may have found a secret, but door still locked lol";
    } else {
      if (inputVal === "pogchamp") {
        document.getElementById("dialogue").innerHTML = "no pogchamp icon :pog:";
      } else {
        if (inputVal === "octocube") {
          document.getElementById("dialogue").innerHTML = "HAH no icon for you loser";
        } else {
          if (inputVal === "seven") {
            document.getElementById("dialogue").innerHTML = "You don't get a Finn icon either.";
          } else {
            if (inputVal === "brainpower") {
              document.getElementById("dialogue").innerHTML = "My brain too lazy to give you your icon";
            } else {
              if (inputVal === "thechickenisonfire") {
                document.getElementById("dialogue").innerHTML = "You won't trick me again. I got teh fire extinguisher";
              } else {
                if (inputVal === "gimmiethecolor") {
                  document.getElementById("dialogue").innerHTML = "How about no?";
                } else {
                  if (inputVal === "69") {
                    document.getElementById("dialogue").innerHTML = "nice. but no.";
                  } else {
                    if (inputVal === "cod3breaker") {
                      document.getElementById("dialogue").innerHTML = "21 43 82 90 95";
                    } else {
                      if (inputVal === "11694") {
                        document.getElementById("dialogue").innerHTML = "Congrats! You wasted time.";
                      } else {
                        if (inputVal === "glubfub") {
                          document.getElementById("dialogue").innerHTML = "I learn from my mistakes, and you don't";
                        } else {
                          if (inputVal === "sirf") {
                            document.getElementById("dialogue").innerHTML = "I heard he's like a, coder.";
                          } else {
                            if (inputVal === "robtop") {
                              document.getElementById("dialogue").innerHTML = "RUBRUBRUBRUBRUBRUB";
                            } else {
                              if (inputVal === "kappa") {
                                document.getElementById("dialogue").innerHTML = "There is no Kappa icon...";
                              } else {
                                if (inputVal === "unicorn") {
                                  document.getElementById("dialogue").innerHTML = "Why do they have a horn?";
                                } else {
                                  if (inputVal === "rubrubpowah123") {
                                    document.getElementById("dialogue").innerHTML = "Ultimate Haxxor mode enabled. Not...";
                                  } else {
                                    if (inputVal === "ogghostjelly") {
                                      document.getElementById("dialogue").innerHTML = "I heard he's like a, silly scrunkly pookie. But he's also a friend";
                                    } else {
                                      if (inputVal === "the challenge") {
                                        document.getElementById("dialogue").innerHTML = "My level? You want to try it!?";
                                        var x = document.getElementById("challenge");
                                        x.style.display = "block";
                                      } else {
                                        document.getElementById("dialogue").innerHTML = randomDialogue[Math.floor(Math.random() * randomDialogue.length)];
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }



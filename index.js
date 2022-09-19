var termText = document.getElementById("terminalText");
var termTextTest = document.getElementById("terminalText");
var mainText = document.getElementById("mainText");
const history = [];
var historyPlace = 0;
var oneAtATime = 0;

var i = 0;

initialize();
rightTerminal();

function rightTerminal() {
  if (window.getComputedStyle(termText).display === "none") {
    termText = document.getElementById("mobileterminalText");
  }
}
//init
function initialize() {
  writeLines(banner, "banner");
  writeLines(mobilebanner, "mobilebanner");
}
termText.scrollIntoView(false);

function mobileKeyboardDown() {
  if (window.getComputedStyle(termTextTest).display === "none") {
    termText.blur();
  }
}
function enterKey(e) {
  e = e || window.event;
  var temp = termText.value;

  if (e.keyCode == 13 && oneAtATime == 0) {
    mobileKeyboardDown();
    switch (temp.toLowerCase().trim()) {
      case "help":
        writeLines(help, "mainText");
        break;
      case "whoisadam":
        writeLines(whoisadam, "mainText");
        writeLines(whoisadammobile, "mainText");
        break;
      case "email":
        writeLines(openmail, "mainText");
        OpenNewTab("mailto:contact@adamrohr.se");
        break;
      case "cv":
        writeLines(openpdf, "mainText");
        OpenNewTab("attachments/correct_adamrohr_cv.pdf");
        break;
      case "banner":
        writeLines(onlyBanner, "mainText");
        break;
      case "history":
        writeLines(newline, "mainText");
        writeLines(history, "mainText");
        break;
      case "clear":
        document.getElementById("mainText").innerHTML = "";
        break;
      case "social":
        writeLines(social, "mainText");
        break;
      case "projects":
        writeLines(projects, "mainText");
        break;
      default:
        writeLines(commandnotfound, "mainText");
        writeLines(commandnotfoundmobile, "mainText");
        break;
    }
    const noWhitespace = temp.replace(/\s/g, "");
    if (noWhitespace != "") {
      history.push(noWhitespace);
    }
    termText.value = "";
    historyPlace = history.length;
  }
}

function checkarrowkey(e) {
  e = e || window.event;

  if (e.keyCode === 38) {
    if (historyPlace > 0) {
      historyPlace--;
      termText.value = history[historyPlace];
      setTimeout(() => {
        termText.setSelectionRange(
          termText.value.length,
          termText.value.length
        );
        termText.focus();
      }, 0);
    }
    if (termText.value == history[0]) {
      setTimeout(() => {
        termText.setSelectionRange(
          termText.value.length,
          termText.value.length
        );
        termText.focus();
      }, 0);
    }
  }
  if (e.keyCode === 40) {
    if (historyPlace < history.length - 1) {
      historyPlace++;
      termText.value = history[historyPlace];
    }
  }
}
function OpenNewTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 750);
}

function promiseFunc(time) {
  oneAtATime = 1;
  setTimeout(() => {
    oneAtATime = 0;
  }, time * 50);
}

function writeLines(name, id) {
  promiseFunc(name.length);
  name.forEach(function (item, index) {
    setTimeout(() => {
      addLine(item, id);
      window.scrollTo(0, document.body.offsetHeight);
    }, index * 50);
  });
}

function addLine(text, paraId) {
  const newPara = document.createElement("p");
  newPara.innerHTML = text;
  document.getElementById(paraId).appendChild(newPara);
}

function notFocused() {
  setTimeout(function () {
    termText.focus();
  }, 100);
}

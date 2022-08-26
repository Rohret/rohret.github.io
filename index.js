const termText = document.getElementById("terminalText");
var mainText = document.getElementById("mainText");

var i = 0;
initialize();
//init
function initialize() {
  writeLines(banner, "banner");
}
termText.scrollIntoView(false);
function enterKey(e) {
  e = e || window.event;
  var temp = termText.value;

  if (e.keyCode == 13) {
    switch (temp.toLowerCase().trim()) {
      case "help":
        writeLines(help, "mainText");
        break;
      case "whois":
        writeLines(whois, "mainText");
        break;
      case "clear":
        console.log(temp);
        document.getElementById("mainText").innerHTML = "";
        break;
    }
    termText.value = "";
  }
}

function writeLines(name, id) {
  name.forEach(function (item, index) {
    setTimeout(() => {
      addLine(item, id);
      window.scrollTo(0, document.body.offsetHeight);
    }, index * 50);
  });
}

/*function addLine(text, paraId) {
  const newPara = document.createElement("p");
  newPara.id = paraId;
  const node = document.createTextNode(text);
  newPara.appendChild(node);
  const element = document.getElementById("mainText");
  element.appendChild(newPara);
}*/

function addLine(text, paraId) {
  const newPara = document.createElement("p");
  newPara.innerHTML = text;
  document.getElementById(paraId).appendChild(newPara);
}

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
      case "whoami":
        writeLines(whoami, "mainText");
        break;
      case "clear":
        console.log(temp);
        document.getElementById("mainText").innerHTML = "";
        break;
      case "email":
        writeLines(openmail, "mainText");
        OpenNewTab("mailto:rohret@hotmail.se");
        break;
      case "cv":
        writeLines(openpdf, "mainText");
        OpenNewTab("adam_rohr_cv.pdf");
        //<a href="test123.pdf">Download Brochure</a>;
        break;
      case "banner":
        writeLines(onlyBanner, "mainText");
        break;
      default:
        writeLines(commandnotfound, "mainText");
        break;
    }
    termText.value = "";
  }
}
function OpenNewTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 750);
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

function notFocused(){
  setTimeout(function() { 
    termText.focus(); 
}, 100);
  
  console.log("inte fokad");
}
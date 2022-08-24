const termText = document.getElementById("terminalText");
var i = 0;
var textFinished = 0;
var testtext = "aaaaa";

typingDelay(testtext);

function typingDelay(text) {
  console.log(text);
  if (i < text.length) {
    /*document.getElementById("mainText").innerHTML += text.charAt(i);*/
    addLine(text.charAt(i));
    i++;
    setTimeout(function () {
      typingDelay(text);
    }, 15);
  }
}

function enterKey(e) {
  e = e || window.event;
  if (e.keyCode == 13 && textFinished == 0) {
    console.log("Knappen fungerade!");
    writeLines(whoami);
    termText.value = "";
  }
}

function writeLines(name) {
  var testi = 0;
  var promise = Promise.resolve();
  name.forEach(function (item, index) {
    promise = promise.then(function () {
      i = 0;
      typingDelay(item);
      textFinished = 1;
      return new Promise(function (resolve) {
        setTimeout(resolve, item.length * 20);
      });
    });
  });

  promise.then(function () {
    textFinished = 0;
    console.log("Loop finished.");
  });
}

function addLine(text) {
  const newPara = document.createElement("span");
  const node = document.createTextNode(text);
  newPara.appendChild(node);
  const element = document.getElementById("mainText");
  element.appendChild(newPara);
}

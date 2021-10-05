let inputCanvas,
  outputContainer,
  statusMsg,
  transferBtn,
  modelReady = false,
  isTransfering = false;

const landscape = pix2pix("./models/landscape13.pict", modelLoaded);
inputCanvas = document.getElementById("myCanvas");

function setup() {
  outputContainer = select("#output");
  statusMsg = select("#status");
  transferBtn = select("#transferBtn");
}

function transfer() {
  isTransfering = true;
  let canvasElement = document.getElementById("myCanvas");
  var dataURL = canvasElement.toDataURL("image/png");
  $("#finalImg").prop("src", dataURL);
  let imgElement = document.getElementById("finalImg");

  setTimeout(function () {
    landscape.transfer(imgElement, (result) => {
      $("#outimg").prop("src", result.src);
      statusMsg.html("Done!");
      isTransfering = false;
    });
  }, 800);
}

function modelLoaded() {
  if (!statusMsg) statusMsg = select("#status");
  statusMsg.html("Model Loaded!");
  transferBtn.show();
  modelReady = true;
}

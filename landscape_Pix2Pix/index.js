let inputCanvas, outputContainer, statusMsg, transferBtn, modelReady = false, isTransfering = false;

const landscape = pix2pix('landscape13.pict', modelLoaded);
inputCanvas=document.getElementById("myCanvas");
// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       $('#pic').attr('src', e.target.result);
//       contents = e.target.result;
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
// }

function setup() {
  // Selcect output div container
  outputContainer = select('#output');
  statusMsg = select('#status');
  transferBtn = select('#transferBtn');

  // Display initial input image
  // $("#input").change(function() {
  //   readURL(this);
  // });
  
  // outputContainer.html('');
  // out.parent('output');

  // Set stroke to black
  //stroke(0);
  //pixelDensity(1);
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function transfer() {
  isTransfering = true;
  // Select canvas DOM element
  let canvasElement = document.getElementById('myCanvas');
  var dataURL = canvasElement.toDataURL('image/png');
  $("#finalImg").prop("src", dataURL);
  let imgElement = document.getElementById('finalImg');
  // Apply pix2pix transformation
  
  setTimeout(function(){
  landscape.transfer(imgElement, result => {
    // Create an image based result
	$("#outimg").prop("src", result.src);
    //createImg(result.src).parent('output');
    statusMsg.html('Done!');
    isTransfering = false;
  });
  },800);
}

// A function to be called when the models have loaded
function modelLoaded() {
  if (!statusMsg) statusMsg = select('#status');
  statusMsg.html('Model Loaded!');
  transferBtn.show();
  modelReady = true;
}

// function usePencil() {
//   stroke(0);
//   strokeWeight(1);
//   inputCanvas.removeClass('eraser');
//   inputCanvas.addClass('pencil');
// }

// function useEraser() {
//   stroke(255);
//   strokeWeight(15);
//   inputCanvas.removeClass('pencil');
//   inputCanvas.addClass('eraser');
// }




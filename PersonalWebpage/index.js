// ---home---
var textWrapper = document.querySelector(".name .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline()
  .add({
    targets: [".name", ".letter"],
    opacity: [0, 1],
    translateX: [300, 0],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 150 + 25 * i,
  })
  .add({
    targets: ".line",
    opacity: [0, 1],
    scaleX: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=600",
  })
  .add({
    targets: ".headshot",
    scale: [0, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    offset: "-=600",
  });

function transfer() {
  $(".namebox").hide();
  $(".headshotbox").hide();
  $(".window").hide();
  $(".swiper-container").css("display", "flex");
  $(".outline").show();
  $(".outlineBtnLeft").show();
  $(".outlineBtnRight").show();
  $(".BtnEnter").show();

  anime
    .timeline()
    .add({
      targets: ".outline",
      scale: [0, 1],
      easing: "easeOutExpo",
      duration: 800,
    })
    .add({
      targets: ".BtnEnter",
      scale: [0, 1],
      opacity: [0, 1],
      easing: "easeOutElastic",
      offset: "-=600",
      duration: 600,
    })
    .add({
      targets: [".outlineBtnLeft", ".outlineBtnRight"],
      scale: [0, 1],
      opacity: [0, 0.5],
      easing: "easeOutElastic",
      offset: "-=400",
      duration: 500,
    });

  /*.add({
      targets: ".transfer",
      height: ["130vh", "100vh"],
      width: ["130vh", "100vh"],
      borderRadius: ["50%", "0%"],
      translateX: "-60%",
      easing: "easeOutExpo",
      duration: 1000,
      offset: "-=200",
    })
    .add({
      targets: ".transfer h1",
      opacity: [0, 1],
      duration: 1000,
      offset: "-=400",
    })*/
}

// ---outline---
var mySwiper = new Swiper(".swiper-container", {
  effect: "flip",
  flipEffect: {
    slideShadows: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".outlineBtnRight",
    prevEl: ".outlineBtnLeft",
  },
  observer: true,
  observeParents: true,
});

function mouseOverleft() {
  $("#BtnLeft").css("opacity", "100%");
}

function mouseOutleft() {
  $("#BtnLeft").css("opacity", "50%");
}

function mouseOverright() {
  $("#BtnRight").css("opacity", "100%");
}

function mouseOutright() {
  $("#BtnRight").css("opacity", "50%");
}

function mouseOverenter() {
  anime({
    targets: ".BtnEnter",
    scale: [1, 1.3],
    duration: 200,
    easing: "easeOutElastic",
  });
}

function mouseOutenter() {
  anime({
    targets: ".BtnEnter",
    scale: [1.3, 1],
    duration: 200,
    easing: "easeOutElastic",
  });
}

count = 0;
Bgcolor = ["#40916C", "#457B9D", "#9A8C98", "#C08552", "#A53860"];
$("#BtnRight").click(function () {
  changebgcolor(1);
});
$("#BtnLeft").click(function () {
  changebgcolor(-1);
});

function changebgcolor(num) {
  count += num;
  if (count > 4) {
    count = 0;
  } else if (count < 0) {
    count = 4;
  }
  anime({
    targets: "body",
    duration: 200,
    easing: "easeInOutQuad",
    backgroundColor: Bgcolor[count],
  });
}

// ---content---
function enter(){
  $(".swiper-container").hide();
  $(".outline").hide();
  $(".outlineBtnLeft").hide();
  $(".outlineBtnRight").hide();
  $(".BtnEnter").hide();
  $(".aboutme").show();

  anime
  .timeline()
  .add({
    targets: ".aboutme",
    height: "100vh",
    easing: "easeInOutQuad",
    duration: 500
  })
  .add({
    targets: ".font",
    opacity: [0, 1],
    color: "#40916c",
    easing: "easeInOutQuad",
    duration: 500,
    offset: "-=400",
  })
}



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
    scale: [10, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    offset: "-=600",
  });

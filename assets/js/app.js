document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("play_btn");
  startButton.addEventListener("click", function () {
    window.location.href = "./game.html";
  });
});
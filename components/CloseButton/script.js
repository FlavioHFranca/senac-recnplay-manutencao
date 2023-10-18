import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const closeButton = document.createElement("button");
  
    closeButton.id = "close_button";
    closeButton.classList.add("close_button");
    closeButton.appendChild(CreateIcon("fa-xmark"));
    closeButton.onclick = () => closeGame();
  
    const menuButtonRoot = document.getElementById("close_button_root");
    menuButtonRoot.appendChild(closeButton);
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
});

// Funcionalidade de closeButton junto do reset do local storage
document.addEventListener("DOMContentLoaded", () => {
  const closeGame = document.getElementById("close_button_root");
  closeGame.addEventListener("click", function () {
    window.location.href = "./index.html";
    localStorage.clear();
  });
});
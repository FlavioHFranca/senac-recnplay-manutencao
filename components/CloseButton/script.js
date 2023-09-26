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

function closeGame() {
  // funcionalidade para exibir modal de confirmar;
  console.log("Modal close game...");
}
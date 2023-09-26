import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const menuButton = document.createElement("button");
  
    menuButton.id = "menu_button";
    menuButton.classList.add("menu_button");
    menuButton.appendChild(CreateIcon("fa-bars"));
    menuButton.onclick = () => handleMenu();
  
    const menuButtonRoot = document.getElementById("menu_button_root");
    menuButtonRoot.appendChild(menuButton);
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
});

function handleMenu() {
  console.log("Handle menu...");
}
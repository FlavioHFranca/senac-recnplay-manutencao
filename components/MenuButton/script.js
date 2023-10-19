import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const menuButton = document.createElement("button");

    menuButton.id = "menu_button";
    menuButton.classList.add("menu_button");
    menuButton.appendChild(CreateIcon("fa-code"));
    menuButton.onclick = () => handleMenu();

    const menuButtonRoot = document.getElementById("menu_button_root");
    menuButtonRoot.appendChild(menuButton);
    // add popup
    const buttom = document.querySelector("button")
    const modal = document.querySelector("dialog")
    const sair = document.querySelector("dialog")

    buttom.onclick = function () {
      modal.showModal()
    }
    sair.onclick = function () {
      modal.close()
    }
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
});

function handleMenu() {
  console.log("Handle menu...");
}
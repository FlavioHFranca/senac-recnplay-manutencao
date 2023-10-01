import CreateIcon from "../../constants/CreateIcon.js";
import ComputerSection from "../ComputerSection/script.js";
import HandleViewButton from "../../constants/HandleViewButton.js";

document.addEventListener("DOMContentLoaded", () => CreateViewDisplayButton());

const CreateViewDisplayButton = () => {
  try {
    const computerButtonRoot = document.getElementById("view_display_button_root");
    computerButtonRoot.appendChild(createButton());
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  };
};

const createButton = () => {
  const button = document.createElement("button");
  button.id = "vd_btn";
  button.classList.add("vd_btn");
  button.appendChild(CreateIcon("fa-display"));

  button.onclick = function () {
    handleState(button.id);
  };

  return button;
};

const handleState = (id_button) => {
  const button = document.getElementById(id_button);
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    ComputerSection();
  } else {
    button.classList.add("active");
    ComputerSection("display");
    HandleViewButton("display");
  };
};
import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => CreateViewCabinetButton());

const CreateViewCabinetButton = () => {
  try {
    const computerButtonRoot = document.getElementById("view_cabinet_button_root");
    computerButtonRoot.appendChild(CreateButton());
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  };
};

const CreateButton = () => {
  const button = document.createElement("button");
  button.id = "vc_btn";
  button.classList.add("vc_btn");
  button.appendChild(CreateIcon("fa-mobile"));
  
  button.onclick = function () {
    handleState(button.id);
  };

  return button;
};

const handleState = (id_button) => {
  const button = document.getElementById(id_button);
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    ViewCabinet(false);
  } else {
    button.classList.add("active");
    ViewCabinet(true);
  };
};

const ViewCabinet = (sectionState) => {
  // component function...
  if (sectionState) {
    console.log("Cabinet...");
  } else {
    console.log("Initial State...");
  }
};
import CreateIcon from "../../constants/CreateIcon.js";
// import ViewMonitor from "../ViewMonitor/script.js";
// import ViewCabinet from "../ViewMonitor/script.js";

document.addEventListener("DOMContentLoaded", () => CreateButton());

const CreateButton = () => {
  try {
    const computerButtonRoot = document.getElementById("view_monitor_button_root");
    computerButtonRoot.appendChild(Button());
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  };
};

const Button = () => {
  const button = document.createElement("button");
  button.id = "vc_btn";
  button.classList.add("vc_btn");
  button.appendChild(CreateIcon("fa-display"));

  button.onclick = function () {
    ViewMonitor();
  };

  return button;
};

const ViewMonitor = () => {
  // component function...
  console.log("View monitor...");
};
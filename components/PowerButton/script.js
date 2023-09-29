import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => PowerButton());

const PowerButton = () => {
  try {
    const root = document.getElementById("power_button_root");
    root.appendChild(createComponent());
  } catch(e) {
    console.log(`Error: ${e.message}`);
  };
};

const createComponent = () => {
  const button = document.createElement("button");
  button.id = "pb_btn";
  button.classList.add("pb_btn");
  button.classList.add("off");
  button.onclick = () => onOff(button.id);

  button.appendChild(CreateIcon("fa-power-off"));

  return button;
};

const onOff = (id_element) => {
  const element = document.getElementById(id_element);
  if (element.classList.contains("on")) {
    element.classList.remove("on");
    element.classList.add("off");
  } else {
    element.classList.remove("off");
    element.classList.add("on");
  }
};
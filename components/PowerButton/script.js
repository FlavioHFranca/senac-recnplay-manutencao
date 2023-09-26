import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const powerButton = document.createElement("button");
  
    powerButton.id = "power_button";
    powerButton.classList.add("power_button");
    powerButton.classList.add("off");
    powerButton.appendChild(CreateIcon("fa-power-off"));
    powerButton.onclick = () => onOff();
  
    const powerButtonRoot = document.getElementById("power_button_root");
    powerButtonRoot.appendChild(powerButton);

  } catch (e) {
    console.log(`Error: ${e.message}`);
  };
});

function onOff() {
  try {
    const powerButton = document.getElementById("power_button");

    if (powerButton.classList.contains("off")) {
      powerButton.classList.remove("off");
      powerButton.classList.add("on");

      console.log("Você ligou o computador.");

    } else {
      powerButton.classList.remove("on");
      powerButton.classList.add("off");

      console.log("Você desligou o computador.");

    };

  } catch (e) {
    console.log(`Erro: ${e.message}}`);
  };
};
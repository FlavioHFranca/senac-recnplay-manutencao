document.addEventListener("DOMContentLoaded", () => ComputerSection());

const ComputerSection = (parameter) => {
  try {
    const computerSectionRoot = document.getElementById("computer_section_root");
    computerSectionRoot.appendChild(createFullComputer(parameter));
  } catch (e) {
    console.log(`Error: ${e.message}`);
  };
};

const createFullComputer = (parameter) => {
  let fullComputer = document.getElementById("computer_image") ? document.getElementById("computer_image") : null;

  if (!fullComputer) {
    fullComputer = document.createElement("figure");
    fullComputer.id = "computer_image";
    fullComputer.className = "computer_image";
  } else {
    while(fullComputer.firstChild) {
      fullComputer.removeChild(fullComputer.lastChild);
    };
  };

  const image = document.createElement("img");
  image.id = "back_image";
  image.className = "back_image";
  image.src = "./assets/imgs/computer/full_computer.png";
  image.alt = "Monitor do computador.";

  const shadow = document.createElement("section");
  shadow.className = "computer_shadow";

  switch (parameter) {
    case "display":
      fullComputer.appendChild(createDisplay());
      image.style.opacity = 0.2;
      shadow.style.backgroundColor = "#3E3E3E";
      break;

    case "case":
      fullComputer.appendChild(createCase());
      image.style.opacity = 0.2;
      shadow.style.backgroundColor = "#3E3E3E";
      break;

    default:
      break;
  };

  fullComputer.appendChild(image);
  fullComputer.appendChild(shadow);

  return fullComputer;
};

const createDisplay = () => {
  const display = document.createElement("img");
  display.className = "front_image";
  display.src = "./assets/imgs/computer/computer_display.png";
  display.alt = "Monitor do computador.";

  return display;
};

const createCase = () => {
  const computerCase = document.createElement("img");
  computerCase.className = "front_image";
  computerCase.src = "./assets/imgs/computer/computer_case.png";
  computerCase.alt = "Gabinete do computador.";

  return computerCase;
};

export default ComputerSection;
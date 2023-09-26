import CreateIcon from "../../constants/CreateIcon.js";

// document.addEventListener("DOMContentLoaded", infoButton());

function InfoButton(sectionInfo) {
  try {
    const infoButton = document.createElement("span");
    const infoTool = document.createElement("span");
    const p = document.createElement("p");

    infoButton.id = "info_button";
    infoButton.classList.add("info_button");
    infoButton.appendChild(CreateIcon("fa-circle-info"));

    infoButton.onmouseover = function() {
      infoTool.classList.remove("hidden");
      infoTool.classList.add("show");
    };

    infoButton.onmouseout = function() {
      infoTool.classList.remove("show");
      infoTool.classList.add("hidden");
    };

    infoTool.id = "info_notification";
    infoTool.classList.add("info_notification");

    p.id = "info_description";
    p.classList.add("info_description");
    p.textContent = sectionInfo;

    infoTool.appendChild(CreateIcon("fa-circle-info"));
    infoTool.appendChild(p);

    const infoButtonRoot = document.getElementById("info_button_root");
    infoButtonRoot.append(infoButton);
    infoButtonRoot.append(infoTool);

    return infoButtonRoot;

  } catch(e) {
    console.log(`Erro: ${e.message}`);
  };
};

export default InfoButton;
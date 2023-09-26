import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const viewCabinetButton = document.createElement("button");
  
    viewCabinetButton.id = "view_cabinet";
    viewCabinetButton.classList.add("view_cabinet");
    viewCabinetButton.appendChild(CreateIcon("fa-mobile"));
    viewCabinetButton.onclick = () => viewCabinet();
  
    const viewCabinetButtonRoot = document.getElementById("view_cabinet_button_root");
    viewCabinetButtonRoot.appendChild(viewCabinetButton);

  } catch (e) {
    console.log(`Error: ${e.message}`);
  };
});

function viewCabinet() {
  console.log("View Cabinet...");
}
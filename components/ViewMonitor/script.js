import CreateIcon from "../../constants/CreateIcon.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const viewMonitorButton = document.createElement("button");
  
    viewMonitorButton.id = "view_monitor";
    viewMonitorButton.classList.add("view_monitor");
    viewMonitorButton.appendChild(CreateIcon("fa-display"));
    viewMonitorButton.onclick = () => viewMonitor();
  
    const viewMonitorButtonRoot = document.getElementById("view_monitor_button_root");
    viewMonitorButtonRoot.appendChild(viewMonitorButton);

  } catch (e) {
    console.log(`Error: ${e.message}`);
  };
});

function viewMonitor() {
  console.log("View Monitor...");
}
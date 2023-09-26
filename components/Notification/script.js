import CreateIcon from "../../constants/CreateIcon.js";

function closeNotification() {
  const notificationRoot = document.getElementById("notification_root");
  const notification = document.getElementById("notification");

  notification.style.display = "none";
  notificationRoot.style.display = "none";
};

function CreateNotification(textContent) {
  try {
    const notification = document.createElement("span");
    notification.id = "notification";
    notification.classList.add("notification");
    notification.classList.add("show");

    notification.append(textContent);
    notification.append(CreateIcon("fa-xmark", function(){ closeNotification() }));
  
    const notificationRoot = document.getElementById("notification_root");
    notificationRoot.style.display = "flex";
    notificationRoot.appendChild(notification);

    if (notificationRoot.style.display == "flex") {
      setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("hidden");
      
        setTimeout(() => {
          notification.style.display = "none";
          notificationRoot.style.display = "none";
        }, 1000);
  
      }, 2500);
    };

  } catch(e) {
    console.log(`Erro: ${e.message}`);
  };
};

export default CreateNotification;
import CreateIcon from "../../constants/CreateIcon.js";

const Notification = (strongText, message) => {
  try {
    const root = document.getElementById("notification_root");
    root.classList.remove("show");
    root.classList.remove("hidden");
    while(root.firstChild) {
      root.removeChild(root.lastChild);
    };
    root.appendChild(createBody(strongText, message));
    root.classList.add("show");

    setTimeout(() => {
      root.classList.add("hidden");
      setTimeout(() => {
        root.classList.remove("show");
      }, 2000);
    }, 2000);
  } catch(e) {
    console.log(`Error: ${e.message}`);
  };
};

const createBody = (strongText, message) => {
  const body = document.createElement("section");
  body.id = "n_body";
  body.classList.add("n_body");
  body.classList.add("show");
  
  const icon = CreateIcon("fa-circle-exclamation");
  
  const strong = document.createElement("strong");
  strong.classList.add("n_type");
  strong.textContent = strongText;

  const description = document.createElement("p");
  description.classList.add("n_description");
  description.append(strong);
  description.append(message);

  body.append(icon);
  body.append(description);

  return body;
};

export default Notification;
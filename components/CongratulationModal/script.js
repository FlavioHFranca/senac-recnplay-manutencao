// import UpdateDatabase from "../../constants/UpdateDatabase/script.js";

const CreateHeader = (title) => {
  const header = document.createElement("section");
  header.classList.add("cm_header");

  const p = document.createElement("p");
  p.classList.add("cm_title");
  p.textContent = title;

  header.appendChild(p);

  return header;
};

const CreateBody = (image, description) => {
  const body = document.createElement("section");
  body.classList.add("cm_body");

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  const p = document.createElement("p");
  p.classList.add("cm_description");
  p.textContent = description;

  body.append(img);
  body.append(p);

  return body;
};

const CreateFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("cm_footer");

  const button = document.createElement("button");
  button.classList.add("cm_btn");
  button.textContent = "Continuar";
  button.onclick = function () { updateDatabase() };

  footer.appendChild(button);

  return footer;
};

const CongratulationModal = (title, img, description) => {
  const root = document.getElementById("cm_root");
  const modal = document.createElement("section");
  modal.id = "cm_container";
  modal.className = "cm_container";

  modal.append(CreateHeader(title));
  modal.append(CreateBody(img, description));
  modal.append(CreateFooter());

  root.appendChild(modal);

  root.style.display = "flex";
  root.classList.add("show");

  setTimeout(() => {
    modal.style.display = "flex";
    modal.classList.add("show");
  }, 500);
};

const updateDatabase = () => {
  console.log("update database system...");
};

export default CongratulationModal;
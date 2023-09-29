const CreateHeader = (title) => {
  const header = document.createElement("section");
  header.classList.add("cm_header");
  
  const p = document.createElement("p");
  p.classList.add("cm_title");
  p.textContent = title;

  header.appendChild(p);

  return header;
};

const CreateBody = (image,description) => {
  const body = document.createElement("figure");
  body.classList.add("cm_figure");
  
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
  button.onclick = function() {console.log("cm_btn")};

  footer.appendChild(button);

  return footer;
};

const CongratulationModal = (title, img, description) => {
  const root = document.getElementById("cm_root");
  root.append(CreateHeader(title));
  root.append(CreateBody(img, description));
  root.append(CreateFooter());
};

export default CongratulationModal;
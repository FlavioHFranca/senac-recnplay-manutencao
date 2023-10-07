function CreateModalInfo(imageData, statusModal, infoRoot, coords) {
  const container = document.createElement("section");
  container.id = "modal_info_container";
  container.classList.add("modal_info_container");

  container.append(figure(imageData.imageSrc));
  container.append(titleDescription(imageData.imageTitle, imageData.imageDescription, imageData.imageComplement));

  const root = document.getElementById(infoRoot);
  while (root.firstChild) {
    root.removeChild(root.lastChild);
  }
  root.appendChild(container);

  if (statusModal) {
    root.style.display = "flex";
    root.style.top = `${coords.top}px`;
    root.style.left = `${coords.left}px`;
  } else {
    root.style.display = "none";
  };
}

function figure(imageSrc) {
  const img = document.createElement("img");
  img.src = imageSrc;

  const figure = document.createElement("figure");
  figure.classList.add("figure_modal_info");

  figure.appendChild(img);

  return figure;
};

function titleDescription(imageTitle, imageDescription, imageComplement) {
  const titleDescriptionSection = document.createElement("section");
  titleDescriptionSection.classList.add("title_description");

  const title = document.createElement("h3");
  title.textContent = imageTitle;

  const description = document.createElement("p");
  description.textContent = imageDescription;

  const br = document.createElement("br");

  const complement = document.createElement("p");
  complement.textContent = imageComplement;

  titleDescriptionSection.append(title);
  titleDescriptionSection.append(description);
  titleDescriptionSection.append(br);
  titleDescriptionSection.append(complement);

  return titleDescriptionSection;
};

export default CreateModalInfo;
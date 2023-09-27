function CreateModalInfo(imageTitle, imageSrc, imageDescription, statusModal, infoRoot, coords) {
  const container = document.createElement("section");
  container.id = "modal_info_container";
  container.classList.add("modal_info_container");

  container.append(figure(imageSrc));
  container.append(titleDescription(imageTitle, imageDescription));

  if (statusModal) {
    container.style.display = "flex";
    container.style.top = `${coords}px`;
  } else {
    container.style.display = "none";
  };

  const root = document.getElementById(infoRoot);
  while (root.firstChild) {
    root.removeChild(root.lastChild);
  }
  root.appendChild(container);
}

function figure(imageSrc) {
  const img = document.createElement("img");
  img.src = imageSrc;

  const figure = document.createElement("figure");
  figure.classList.add("figure_modal_info");

  figure.appendChild(img);

  return figure;
};

function titleDescription(imageTitle, imageDescription) {
  const titleDescriptionSection = document.createElement("section");
  titleDescriptionSection.classList.add("title_description");

  const title = document.createElement("h3");
  title.textContent = imageTitle;

  const description = document.createElement("p");
  description.textContent = imageDescription;

  titleDescriptionSection.append(title);
  titleDescriptionSection.append(description);

  return titleDescriptionSection;
};

export default CreateModalInfo;
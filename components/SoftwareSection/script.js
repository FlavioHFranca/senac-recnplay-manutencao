import GetImages from "../../constants/GetImages.js";
import CreateIcon from "../../constants/CreateIcon.js";
import InfoButton from "../InfoButton/script.js";
import CreateModalInfo from "../InfoModal/script.js";

const INFO_MODAL_ROOT = "info_modal_root";

document.addEventListener("DOMContentLoaded", createHardwareSection());

function createHardwareSection() {
  const hardwareContainer = document.createElement("section");
  hardwareContainer.id = "software_container";
  hardwareContainer.classList.add("software_container");

  hardwareContainer.append(hardwareHeader());
  hardwareContainer.append(imgContainer());

  const hardwareSectionRoot = document.getElementById("software_section_root");
  hardwareSectionRoot.append(createInfoModalRoot());
  hardwareSectionRoot.append(hardwareContainer);
};

function createInfoModalRoot() {
  const infoModalRoot = document.createElement("section");
  infoModalRoot.id = INFO_MODAL_ROOT;

  return infoModalRoot;
};

function hardwareHeader() {
  const icon = CreateIcon("fa-windows");

  const headerTitle = document.createElement("h3");
  headerTitle.textContent = "Sofware";
  const infoButton = InfoButton("Programas e aplicatvios instalados no seu computador.");

  const titleWrapper = document.createElement("section");
  titleWrapper.classList.add("title_wrapper");
  titleWrapper.append(icon);
  titleWrapper.append(headerTitle);

  const iconWrapper = document.createElement("section");
  iconWrapper.classList.add("icon_wrapper");
  iconWrapper.append(infoButton);

  const hardwareHeader = document.createElement("section");
  hardwareHeader.classList.add("software_header");
  hardwareHeader.append(titleWrapper);
  hardwareHeader.append(iconWrapper);

  return hardwareHeader;
};

function imgContainer() {
  const getImages = new GetImages();
  const imgsArray = getImages.getHardwareImages();

  const container = document.createElement("section");
  container.classList.add("sofware_img_container");

  imgsArray.forEach(item => {
    const figure = document.createElement("figure");
    figure.id = "software_figure";
    figure.classList.add("software_figure");

    const figureCoords = figure.getBoundingClientRect().top - 180;

    const img = document.createElement("img");
    img.src = `./assets/imgs/software/imagens_secao/${item.name}`;
    img.alt = `${item.alt}`;
    
    img.onmouseover = () => CreateModalInfo(item.title, `./assets/imgs/software/imagens_descricao/${item.info.name}`, item.info.description, true, INFO_MODAL_ROOT, figureCoords);
    img.onmouseout = () => CreateModalInfo(item.title, `./assets/imgs/software/imagens_descricao/${item.info.name}`, item.info.description, false, INFO_MODAL_ROOT, figureCoords);
    img.onclick = () => { console.log("Show feedbackModal!") };

    figure.append(img);
    container.append(figure);
  });

  return container;
};
import GetImages from "../../constants/GetImages.js";
import CreateIcon from "../../constants/CreateIcon.js";
import InfoButton from "../../components/InfoButton/script.js";
import CreateModalInfo from "../InfoModal/script.js";

document.addEventListener("DOMContentLoaded", createHardwareSection());

function createHardwareSection() {
  const hardwareContainer = document.createElement("section");
  hardwareContainer.id = "hardware_container";
  hardwareContainer.classList.add("hardware_container");

  hardwareContainer.append(hardwareHeader());
  hardwareContainer.append(imgContainer());

  const hardwareSectionRoot = document.getElementById("hardware_section_root");
  hardwareSectionRoot.appendChild(hardwareContainer);
};

function hardwareHeader() {
  const icon = CreateIcon("fa-memory");

  const headerTitle = document.createElement("h3");
  headerTitle.textContent = "Hardware";
  const infoButton = InfoButton("Peças e equipamentos físicos do computador.");

  const titleWrapper = document.createElement("section");
  titleWrapper.classList.add("title_wrapper");
  titleWrapper.append(icon);
  titleWrapper.append(headerTitle);

  const iconWrapper = document.createElement("section");
  iconWrapper.classList.add("icon_wrapper");
  iconWrapper.append(infoButton);

  const hardwareHeader = document.createElement("section");
  hardwareHeader.classList.add("hardware_header");
  hardwareHeader.append(titleWrapper);
  hardwareHeader.append(iconWrapper);

  return hardwareHeader;
};

function imgContainer() {
  const getImages = new GetImages();
  const imgsArray = getImages.getHardwareImages();

  const container = document.createElement("section");
  container.classList.add("hardware_img_container");

  imgsArray.forEach(item => {
    const figure = document.createElement("figure");
    figure.classList.add("hardware_figure");

    figure.onmouseover = CreateModalInfo(item.info.name, true);
    figure.onmousedown = CreateModalInfo(item.info.name, false);

    const img = document.createElement("img");
    img.src = `./assets/imgs/hardware/imagens_secao/${item.name}`;
    img.alt = `${item.alt}`;

    figure.append(img);
    container.append(figure);
  });

  return container;
};
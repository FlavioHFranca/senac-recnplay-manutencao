import GetImages from "../../constants/GetImages.js";
import CreateIcon from "../../constants/CreateIcon.js";
import InfoButton from "../../components/InfoButton/script.js";

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
  icon.classList.add("fa-solid");
  icon.classList.add("fa-circle-info");

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
  const imgsArray = Array(
    "cooler_secao.png",
    "disco_rigido_secao.png",
    "fonte_de_alimentacao_secao.png",
    "memoria_ram_secao.png",
    "monitor_secao.png",
    "pincel_secao.png",
    "placa_de_video_secao.png",
    "placa_mae_secao.png",
    "processador_secao.png",
    "ssd_secao.png"
  );

  const container = document.createElement("section");
  container.classList.add("hardware_img_container");

  imgsArray.forEach(name => {
    const figure = document.createElement("figure");
    figure.classList.add("hardware_figure");

    const img = document.createElement("img");
    img.src = `./assets/imgs/hardware/imagens_secao/${name}`;
    // img.alt = `${alt}`;

    figure.append(img);
    container.append(figure);
  });

  return container;
};
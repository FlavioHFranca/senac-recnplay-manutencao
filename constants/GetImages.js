class GetImages {
  getHardwareImages() {
    const hardwareImageArray = Array(
      { 
        name: "processor_section.png",
        title: "Cooler do Processador",
        info: { 
          name: "processor_tooltip.png",
          description: "O processador é uma espécie de microship especializado. A sua função é acelerar, endereçar, resolver ou preparar dados, dependendo da aplicação.",
          complement: "Clique para substituir o processador do computador por outro." 
        },
        alt: "Processador do computador."
      }
    );
    return hardwareImageArray;
  }

  getSoftwareImages() {
    const softwareImageArray = Array(
      { 
        name: "att_so_section.png",
        title: "Sistema Operacional",
        info: { 
          name: "att_so_tooltip.png",
          description: "O S.O (Sistema Operacional) é um software ou um conjunto de software que fazem o seu computador funcionar.",
          complement: "Clique para atualizar o Sistema Operacional do seu computador"
        },
        alt: "Sistema Operacional."
      }
    );
    return softwareImageArray;
  }
}

export default GetImages;
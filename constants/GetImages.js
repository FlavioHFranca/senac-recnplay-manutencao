class GetImages {
  getHardwareImages() {
    const hardwareImageArray = Array(
      { 
        name: "cooler_secao.png",
        title: "Cooler do Processador",
        info: { 
          name: "cooler.png",
          description: "O Cooler é um equipamento que permite que o processador não atinga altas temperaturas, evitando defeitos de funcionamento." 
        },
        alt: "Imagem Cooler do processador."
      }
    );
    return hardwareImageArray;
  }

  getSoftwareImages() {
    const softwareImageArray = Array(
      { 
        name: "atualizar_so_secao.png",
        title: "Sistema Operacional",
        info: { 
          name: "atualizar_so.png",
          description: "O S.O (Sistema Operacional) é um software ou um conjunto de software que fazem o seu computador funcionar." 
        },
        alt: "Imagem Sistema Operacional."
      },
    );
    return softwareImageArray;
  }
}

export default GetImages;
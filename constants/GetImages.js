class GetImages {
  getHardwareImages() {
    const hardwareImageArray = Array(
      { 
        name: "cooler_secao.png",
        info: { name: "cooler_descricao.png", description: "O Cooler é um equipamento que permite que o processador não atinga altas temperaturas, evitando defeitos de funcionamento." },
        alt: "Imagem Cooler do processador."
      },
    );
    return hardwareImageArray;
  }

  getSoftwareImages() {
    const softwareImageArray = Array(
      { 
        name: "atualizar_so_secao.png",
        info: { name: "atualizar_so.png", description: "O S.O (Sistema Operacional) é um software ou um conjunto de software que fazem o seu computador funcionar." },
        alt: "Imagem Sistema Operacional."
      },
    );
    return softwareImageArray;
  }
}

export default GetImages;
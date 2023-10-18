class GetImages {
  getHardwareImages() {
    const hardwareImageArray = Array(
      { 
        code: 101,
        name: "processor_section.png",
        title: "Processador",
        alt: "Processador do computador.",
        info: { 
          name: "processor_tooltip.png",
          description: "O processador é uma espécie de microship especializado. A sua função é acelerar, endereçar, resolver ou preparar dados, dependendo da aplicação.",
          complement: "Clique para substituir o processador do computador por outro." 
        }
      },
      { 
        code: 102,
        name: "mother_board_section.png",
        title: "Placa Mãe",
        alt: "Placa do computador.",
        info: { 
          name: "mother_board_tooltip.png",
          description: "A placa mãe é o componente central do computador, conecta a CPU, memória RAM, armazenamento e periféricos, permitindo comunicação eficaz entre os dispositivos.",
          complement: "Clique para substituir ou reparar a placa mãe do computador." 
        }
      },
      { 
        code: 103,
        name: "cooler_section.png",
        title: "Cooler do Processador",
        alt: "Cooler do computador.",
        info: { 
          name: "cooler_tooltip.png",
          description: "O cooler é um componente de resfriamento no computador, dissipando calor da CPU, GPU e outros componentes, prevenindo superaquecimento e danos.",
          complement: "Clique para substituir o cooler do computador por outro." 
        }
      },
      { 
        code: 104,
        name: "ram_section.png",
        title: "Memória Ram",
        alt: "Memoria do computador.",
        info: { 
          name: "ram_tooltip.png",
          description: "A memória ram do computador armazena dados temporários para processamento rápido pela CPU, permitindo execução de programas e tarefas eficientemente.",
          complement: "Clique para substituir a memória ram do computador por outra." 
        }
      },
      { 
        code: 105,
        name: "video_card_section.png",
        title: "Placa de Vídeo",
        alt: "Placa de video do computador.",
        info: { 
          name: "video_card_tooltip.png",
          description: "A placa de vídeo processa e exibe gráficos no monitor, crucial para jogos, edição de vídeo e tarefas visuais intensivas em computadores.",
          complement: "Clique para substituir a placa de vídeo do computador por outra." 
        }
      },
      { 
        code: 106,
        name: "monitor_section.png",
        title: "Monitor",
        alt: "Tela.",
        info: { 
          name: "monitor_tooltip.png",
          description: "O monitor exibe informações visuais do computador. É a interface principal para usuários, mostrando texto, imagens, vídeos e gráficos.",
          complement: "Clique para substituir o monitor do computador por outro." 
        }
      },
      { 
        code: 107,
        name: "power_supply_section.png",
        title: "Fonte",
        alt: "Fonte do computador.",
        info: { 
          name: "power_supply_tooltip.png",
          description: "A fonte de computador converte energia elétrica em voltagem adequada para alimentar todos os componentes do PC, garantindo seu funcionamento.",
          complement: "Clique para substituir a fonte do computador por outra." 
        }
      },
      { 
        code: 108,
        name: "brush_section.png",
        title: "Pincel",
        alt: "Pincel para limpar.",
        info: { 
          name: "brush_tooltip.png",
          description: "A função de um pincel antiestático é remover partículas de sujeira, promover a desoxidação de ferrugem em componentes ou placas, garantindo sua proteção através da dissipação de cargas eletrostáticas.",
          complement: "Clique para limpar o computador." 
        }
      },
      { 
        code: 109,
        name: "hard_disk_section.png",
        title: "Disco Rígido",
        alt: "HD do computador.",
        info: { 
          name: "hard_disk_tooltip.png",
          description: "Disco rígido (HD) armazena dados permanentes no computador, como sistema operacional, aplicativos e arquivos, permitindo acesso rápido e seguro.",
          complement: "Clique para substituir o disco rígido do computador por outro." 
        }
      },
      { 
        code: 110,
        name: "ssd_section.png",
        title: "SSD",
        alt: "ssd do computador.",
        info: { 
          name: "ssd_tooltip.png",
          description: "SSD (Solid State Drive) é dispositivo de armazenamento que oferece acesso rápido a dados, melhorando velocidade e desempenho geral do computador.",
          complement: "Clique para substituir o SSD do computador por outro." 
        }
      }
    );
    return hardwareImageArray;
  }

  getSoftwareImages() {
    const softwareImageArray = Array(
      { 
        code: 201,
        name: "att_so_section.png",
        title: "Sistema Operacional",
        alt: "Sistema Operacional.",
        info: { 
          name: "att_so_tooltip.png",
          description: "O S.O (Sistema Operacional) é um software ou um conjunto de software que fazem o seu computador funcionar.",
          complement: "Clique para atualizar o Sistema Operacional do seu computador"
        }
      },
      { 
        code: 202,
        name: "att_driver_section.png",
        title: "Atualizar Driver",
        alt: "Drivers.",
        info: { 
          name: "att_driver_tooltip.png",
          description: "Atualizar drivers melhora a compatibilidade, segurança e desempenho do hardware, garantindo funcionamento eficiente e correção de falhas.",
          complement: "Clique para atualizar os Drivers do seu computador"
        }
      },
      { 
        code: 203,
        name: "reinstall_programs_section.png",
        title: "Reinstalar Programa",
        alt: "Programas.",
        info: { 
          name: "reinstall_programs_tooltip.png",
          description: "Reinstalar resolve problemas de software, substitui arquivos corrompidos, restaura configurações padrão e melhora a estabilidade e o desempenho do programa.",
          complement: "Clique para reinstalar um programa do seu computador"
        }
      },
      { 
        code: 204,
        name: "setup_config_section.png",
        title: "Configurar BIOS",
        alt: "Setup.",
        info: { 
          name: "setup_config_tooltip.png",
          description: "Configurar BIOS personaliza hardware, otimiza desempenho, controla dispositivos e permite inicialização do sistema operacional. Essencial para adaptar o computador às necessidades específicas.",
          complement: "Clique para configurar a BIOS do seu computador"
        }
      },
      { 
        code: 205,
        name: "virus_verify_section.png",
        title: "Remoção de Malware",
        alt: "Virus.",
        info: { 
          name: "virus_verify_tooltip.png",
          description: "Malware é software malicioso que danifica, rouba dados ou controla sistemas. Removê-lo protege privacidade, segurança e desempenho computacional.",
          complement: "Clique para remover malwares do seu computador"
        }
      },
    );
    return softwareImageArray;
  }
}

export default GetImages;
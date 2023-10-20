function GetProblems() {

  const problems = Array(
    // Problems hardware
    {
      // Processador
      id: 1,
      description: "O computador liga normalmente, mas a placa-mãe está fazendo alguns bipes, o cooler começa a girar em velocidade mais rápida.",
      additional_information: "O sistema operacional não consegue iniciar.",
      resolved: false,
      resolve_code: 101
    },
    {
      // Placa-mãe
      id: 2,
      description: "O computador levou uma queda e está apresentando bips para iniciar.",
      additional_information: "O computador só inicia depois de bipar e reiniciar algumas vezes.",
      resolved: false,
      resolve_code: 101
    },
    {
      // Cooler de resfriamento
      id: 3,
      description: "O computador, depois de um certo tempo ligado, desliga sozinho e demora um tempo para poder ligá-lo novamente.",
      additional_information: "Assim que iniciada a máquina, é verificado que o computador está com uma temperatura acima do normal.",
      resolved: false,
      resolve_code: 103
    },
    {
      // Memória RAM
      id: 4,
      description: "O desempenho do computador está abaixo do normal, com lentidão ao executar tarefas básicas como: ler e gravar arquivos ou digitar textos. Alguns arquivos do usuário desapareceram e o computador às vezes trava, apresentando uma tela azul.",
      additional_information: "A lentidão aumenta ao abrir algum browser ou programa um pouco mais pesado.",
      resolved: false,
      resolve_code: 104
    },
    {
      // Placa de vídeo
      id: 5,
      description: "Utilizando o computador a tela começa a gerar imagens com interferências, linhas multicoloridas e demais deformidades.",
      additional_information: "O problema ocorre desde que o computador é ligado, mesmo sem executar nenhum programa, no entanto, também ocorre a partir da execução de um jogo.",
      resolved: false,
      resolve_code: 105
    },
    {
      // Monitor
      id: 6,
      description: "Ao ligar o computador, desde o inicio do sistema, da pra visualizar linhas e manchas no visor da tela.",
      additional_information: "São linhas horizontais e verticais, juntamente por pontos brilhantes. ",
      resolved: false,
      resolve_code: 106
    },
    {
      // Fonte alimentação
      id: 7,
      description: "Ao tentar ligar o computador não é apresentado nenhum sinal na tela, a ventoinha não roda e não acendem nenhuma das luzes frontais. ",
      additional_information: "A energia está normal.",
      resolved: false,
      resolve_code: 107
    },
    {
      // Limpeza (pincel)
      id: 8,
      description: "Ao ligar o computador apresenta bips longos e não aparece nada em seu monitor.",
      additional_information: "O problema veio acontecer depois que o computador foi transportado de um cômodo para o outro.",
      resolved: false,
      resolve_code: 108
    },
    {
      // Placa de rede
      id: 9,
      description: "A conexão está instável e até mesmo cai com frequência.",
      additional_information: "Ao verificar o modem, tudo está funcionando corretamente.",
      resolved: false,
      resolve_code: 109
    },
    {
      // SSD
      id: 10,
      description: "O sistema operacional não inicia na primeira tentativa, mas após algumas tentativas ele consegue iniciar normalmente.",
      additional_information: "Ao tentar acessar ou gravar um arquivo no seu computador aparece uma mensagem de erro ou simplesmente não é executada nenhuma ação.",
      resolved: false,
      resolve_code: 110
    },


    // Problems software
    {
      // Sistema operacional (SO)
      id: 11,
      description: "O computador está deixando de responder sempre que executa um determinado conjunto de etapas.",
      additional_information: "Toda vez que acontece, é nececessário reinciar o computador para recuperá-lo.",
      resolved: false,
      resolve_code: 201
    },
    {
      // Drivers
      id: 12,
      description: "As imagens não apresentam distorções, mas aparecem no sistema operacional com baixa definição e poucas cores.",
      additional_information: "Não é possível selecionar uma resolução maior de tela nas configurações de resolução de tela do sistema operacional.",
      resolved: false,
      resolve_code: 202
    },
    {
      // Instalação de programas
      id: 13,
      description: "O programa não foi instalado corretamente, isso pode ocorrer por vários motivos, erros de downloads, problema com sistema operacional ou incompatibilidade com o hardware.",
      additional_information: "Não há informações adicionais.",
      resolved: false,
      resolve_code: 203
    },
    {
      // Configuração da BIOS
      id: 14,
      description: "Ao iniciar a máquina não é reconhecido o local de armazenamento em que o sistema operacional foi instalado.",
      additional_information: "Não há informações adicionais.",
      resolved: false,
      resolve_code: 204
    },
    {
      // Vírus
      id: 15,
      description: "O computador pode apresentar erros inesperados, como falhar em aplicativos ou arquivos.",
      additional_information: "O problema começou depois que eu abri o arquivo que meu amigo me enviou por e-mail.",
      resolved: false,
      resolve_code: 205
    }
  );

  return problems;
}

export default GetProblems;
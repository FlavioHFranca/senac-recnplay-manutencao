function GetProblems() {

  const problems = Array(
    // Problems hardware
    {
      id: 1,
      description: "O computador liga normalmente, mas a placa-mãe está fazendo alguns bipes, o cooler começa a girar em velocidade mais alta.",
      additional_information: "O sistema operacional não consegue iniciar.",
      resolved: false,
      resolve_code: 101
    },
    {
      id: 2,
      description: "O computador trava ou reinicia sozinho no dia a dia e trava antes do boot.",
      additional_information: "Informações sobre o problema 2.",
      resolved: false,
      resolve_code: 102
    },
    {
      id: 3,
      description: "O computador depois de um certo tempo ligado ele desliga sozinho e demora um tempo para poder liga-lo. ",
      additional_information: "Ao verificar o monitoramento, assim que liga foi verificado que o computador está com uma temperatura acima do normal.",
      resolved: false,
      resolve_code: 103
    },
    {
      id: 4,
      description: "O computador está apresentando problemas de desempenho, como lentidão ao executar tarefas básicas, como ler, gravar arquivos ou digitar textos. Alguns arquivos do usuário desapareceram e o computador às vezes trava e da tela azul.",
      additional_information: "A lentidão aumenta ao abrir algum browser ou programa um pouco mais pesado.",
      resolved: false,
      resolve_code: 104
    },
    {
      id: 5,
      description: "Utilizando o computador a tela começa a gerar imagens com interferências, linhas multicoloridas e demais deformidades.",
      additional_information:"O problema ocorre desde que o computador é ligado, mesmo sem executar nenhum programa, no entanto, também ocorre a partir de um a execução de um jogo.",
      resolved : false,
      resolve_code: 105
    },
    {
      id: 6,
      description: "Ao ligar o computador, desde o inicio do sistema, da pra visualizar linhas e manchas no visor da tela.",
      additional_information:"São linhas horizontais e verticais, juntamente por pontos brilhantes. ",
      resolved : false,
      resolve_code: 106
    },
    {
      id: 7,
      description: "Ao tentar ligar o computador ele não da sinal, e o CPU Fan não roda, não acende nenhuma das luzes frontal. ",
      additional_information:"A energia está normal.",
      resolved : false,
      resolve_code: 107
    },
    {
      id: 8,
      description: "Ao ligar o computador apresenta bips longos e não aparece nada em seu monitor.",
      additional_information:"O problema veio acontecer depois que o computador foi transportado de um cômodo para o outro",
      resolved : false,
      resolve_code: 108
    },
    {
      id: 9,
      description: "",
      additional_information:"O computador informa um erro ao acessar ou gravar arquivos.",
      resolved : false,
      resolve_code: 109
    },
    {
      id: 10,
      description: "O sistema operacional não inicia na primeira tentativa, mas após algumas tentativas ele consegue iniciar normalmente",
      additional_information:"Ao tentar acessar ou gravar um arquivo no seu computador aparece uma mensagem de erro ou simplesmente não abre.",
      resolved : false,
      resolve_code: 110
    },
    // Problems software
    {
      id: 11,
      description: "O computador está deixando de responder sempre que executa um determinado conjunto de etapas.",
      additional_information:"Toda vez que acontece, é nececessário reiniar o computador para recuperá-lo.",
      resolved : false,
      resolve_code: 201
    },
    {
      id: 12,
      description: "As imagens não apresentam distorções, mas aparecem no sistema operacional com baixa definição e poucas cores.",
      additional_information:"Não é possível selecionar uma resolução maior de tela nas configurações de resolução de tela do sistema operacional.",
      resolved : false,
      resolve_code: 202
    },
    {
      id: 13,
      description: "O programa não foi instalado corretamente, isso pode ocorrer por vários motivos, erros de downloads, problema com sistema operacional ou incompatibilidade com o hardware.",
      additional_information:"",
      resolved : false,
      resolve_code: 203
    },
    {
      id: 14,
      description: "Ao tentar iniciar o computador, ele fica bipando e não inicia corretamente.",
      additional_information:"",
      resolved : false,
      resolve_code: 204
    },
    {
      id: 15,
      description: "O computador pode apresentar erros inesperados, como falhar em aplicativos ou arquivos.",
      additional_information:"O problema começou depois que eu abri o arquivo que meu amigo me enviou por e-mail.",
      resolved : false,
      resolve_code: 205
    }
  );

  return problems;
}

export default GetProblems;
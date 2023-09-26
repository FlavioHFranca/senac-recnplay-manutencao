function GetProblems() {

  const problems = Array(
    {
      id: 1,
      description: "Problema na memória RAM",
      additinal_information: "Informações sobre o problema na memória RAM.",
      resolved: false,
    },
    {
      id: 2,
      description: "Problema na Placa de Vídeo.",
      additinal_information: "Informações sobre o problema na Placa de Vídeo.",
      resolved: false
    },
    {
      id: 3,
      description: "Problema no SSD.",
      additinal_information: "Informações sobre o problema no SSD.",
      resolved: false
    },
    {
      id: 4,
      description: "Problema na Placa Mãe.",
      additinal_information: "Informações sobre o problema na Placa mãe.",
      resolved: false
    }
  );

  return problems;
}

export default GetProblems;
renderCircuits();

// function renderCircuits() {
//   Object.entries(circuits).forEach(([id, value]) => {
//     try {
//       // Tenta executar o código dentro do try
//       let formatedValue = value.split("\n"); // Divide a string em um array de linhas
//       formatedValue = formatedValue.slice(4, -3).join("\n"); // Remove 3 do início e 3 do fim

//       circuits[id] = formatedValue; // reatribui as variaveis

//       formatedValue = "$$" + formatedValue + "$$"; // Formata para LaTeX

//       // Atualiza o conteúdo do elemento HTML com o id correspondente
//       const element = document.getElementById(id);
//       if (element) {
//         // Verifica se o elemento existe
//         element.innerHTML = formatedValue;
//       } else {
//         console.error(
//           `*** Error in circuits.js - Elemento com ID '${id}' não encontrado.`
//         );
//       }
//     } catch (error) {
//       // Captura e exibe qualquer erro ocorrido
//       console.error(
//         `*** Error in circuits.js - Erro ao processar o circuito com ID '${id}':`,
//         error
//       );
//     }
//   });
// }

function renderCircuits() {
  Object.entries(circuits).forEach(([id, value]) => {
    try {
      // Tenta executar o código dentro do try
      
      let formatedValue = value.split("\n"); // Divide a string em um array de linhas
      formatedValue = formatedValue.slice(4, -3).join("\n"); // Remove 3 do início e 3 do fim

      circuits[id] = formatedValue; // reatribui as variáveis

      formatedValue = "$$" + formatedValue + "$$"; // Formata para LaTeX

      // Seleciona todos os elementos que possuem o atributo idCircuit com o valor correspondente
      const elements = document.querySelectorAll(`[idCircuit="${id}"]`);

      if (elements.length > 0) {
        elements.forEach((element) => {
          element.innerHTML = formatedValue;
        });
      } else {
        console.error(
          `*** Error in circuits.js - Nenhum elemento com idCircuit='${id}' encontrado.`
        );
      }
    } catch (error) {
      // Captura e exibe qualquer erro ocorrido
      console.error(
        `*** Error in circuits.js - Erro ao processar o circuito com idCircuit='${id}':`,
        error
      );
    }
  });
}

function changeCircuitValues(jsonChanges) {
  for (let i = 0; i < jsonChanges.circuits.length; i++) {
    const circuit = jsonChanges.circuits[i];

    // Seleciona todos os elementos que possuem o atributo ref com o valor correspondente
    let elements = document.querySelectorAll(`[ref="${circuit.ref}"]`);

    if (elements.length === 0) {
      console.warn(`Aviso: Nenhum elemento com ref='${circuit.ref}' encontrado.`);
      continue; // Pula para o próximo circuito
    }

    elements.forEach((element) => {
      let code = element.innerHTML;

      // Verifica se components, values e units possuem o mesmo tamanho
      if (
        circuit.components.length !== circuit.values.length ||
        circuit.components.length !== circuit.units.length
      ) {
        console.warn(
          `Aviso: Tamanhos inconsistentes para components, values e units no circuito '${circuit.ref}'.`
        );
        return; // Pula para o próximo elemento sem modificar
      }

      let findArray = [];
      let replaceArray = [];

      // Itera sobre os componentes
      for (let j = 0; j < circuit.components.length; j++) {
        const component = circuit.components[j];
        const componentASCII = encodeURIComponent(component + "=");

        const value = encodeURIComponent(circuit.values[j]);
        const unit = encodeURIComponent(circuit.units[j]);

        findArray.push(componentASCII);
        replaceArray.push(componentASCII + value + unit);
      }

      const newCode = multipleReplacesByPosition(code, findArray, replaceArray);
      element.innerHTML = newCode;
    });
  }
}



function stringToASCII(str) {
  let asciiArray = [];
  for (let i = 0; i < str.length; i++) {
    asciiArray.push(str.charCodeAt(i));
  }
  return asciiArray;
}

function multipleReplacesByPosition(str, findArray, replaceArray) {
  if (findArray.length !== replaceArray.length) {
    console.error(
      "Os vetores de busca e substituição devem ter o mesmo tamanho."
    );
    return str;
  }

  for (let i = 0; i < findArray.length; i++) {
    const find = findArray[i];
    const replace = replaceArray[i];

        
    // Expressão regular para encontrar a string e apagar caracteres até "%24"
    // Cria a RegExp escapando `find`
    const regex = new RegExp(`(${escapeRegExp(find)}).*?%24`, "g");

    // Substitui removendo os valores indesejados
    str = str.replace(regex, `${replace}%24`);
    // console.log(str);

  }

  return str;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapa caracteres especiais do regex
}



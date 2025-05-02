function reset(ref) {
    const inputs = document.querySelectorAll(`input[inputRef="${ref}"]`);
    
    inputs.forEach(input => {
      input.value = input.getAttribute('value');
    });
}


function init_generic(prefixo, valoresJSON, circuitComponentsJSON) {
    // Converte as strings JSON em objetos
    const valores = JSON.parse(valoresJSON);
    const circuitComponents = JSON.parse(circuitComponentsJSON);

    // Cria ou obtém o objeto global correspondente ao prefixo
    if (!window[prefixo]) {
        window[prefixo] = {};
    }

    // Itera sobre as chaves do objeto e define os valores no objeto global
    for (let chave in valores) {
        let valorConvertido = isNaN(valores[chave]) ? valores[chave] : Number(valores[chave]);
        window[prefixo][chave] = valorConvertido;

        // Atualiza o valor no campo de input, se existir
        let elemento = document.getElementById(`${prefixo}-${chave}`);
        if (elemento) {
            elemento.value = valorConvertido;
        }
    }

    // Atualiza os valores dos inputs no objeto global
    for (let chave in window[prefixo]) {
        let elemento = document.getElementById(`${prefixo}-${chave}`);
        if (elemento) {
            let valorConvertido = parseFloat(elemento.value);
            window[prefixo][chave] = valorConvertido;
        }
    }

    // Mapeia os componentes para os valores corretos do objeto `window[prefixo]`
    const componentMapping = createComponentMapping(valores, circuitComponents);

    const values = circuitComponents.components.map(component => {
        let key = componentMapping[component]; // Converte o nome LaTeX para a chave real
        return window[prefixo][key] !== undefined ? window[prefixo][key] : null;
    });

    // Prepara os dados para enviar ao changeCircuitValues
    const circuitData = {
        "circuits": [{
            "ref": prefixo,
            "components": circuitComponents.components,
            "values": values, // Valores agora extraídos corretamente
            "units": circuitComponents.units
        }]
    };

    // Verifica se todos os valores são numéricos
    const allNumbers = values.every(value => !isNaN(value));

    if (!allNumbers) {
        alert('Valor(es) inválido(s) - Utilize "." para decimais');
        return;
    }

    // Chama a função de atualização do circuito
    changeCircuitValues(circuitData);
}

function createComponentMapping(valores, circuitComponents) {
    const mapping = {};

    circuitComponents.components.forEach((component, index) => {
        const keys = Object.keys(valores);
        if (keys[index]) {
            mapping[component] = keys[index];
        }
    });

    return mapping;
}

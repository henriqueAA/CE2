ex1 = {};

// Inicializar os exercícios
setTimeout(() => {
    init_ex1();    
}, 1000);


    
// Exercicio 1 ---------------------------------------------------------------

function init_ex1(){

    const prefixo = "ex1";

    ex1.R1 = 6;
    ex1.R2 = 2;
    ex1.R3 = 8;
    ex1.R4 = 4;
    ex1.V1 = 50;
    ex1.I1 = 5;
    ex1.IFD_gain = 3;

    for (let chave in ex1) {
        document.getElementById(`${prefixo}-${chave}`).value = ex1[chave];                
    }   
    updateCircuitValues_ex1(); 
}

function updateCircuitValues_ex1() {
    
    const prefixo = "ex1";    
    
    ex1.R1 = parseFloat(document.getElementById(`${prefixo}-R1`).value)    
    ex1.R2 = parseFloat(document.getElementById(`${prefixo}-R2`).value)
    ex1.R3 = parseFloat(document.getElementById(`${prefixo}-R3`).value)
    ex1.R4 = parseFloat(document.getElementById(`${prefixo}-R4`).value)
    
    ex1.V1 = parseFloat(document.getElementById(`${prefixo}-V1`).value)
    ex1.IFD_gain = parseFloat(document.getElementById(`${prefixo}-IFD_gain`).value)
    ex1.I1 = parseFloat(document.getElementById(`${prefixo}-I1`).value)					

    const allNumbers = Object.values(ex1).every(value => !isNaN(value));

    if (!allNumbers) {
        alert('Valor(es) invalido(s) - Utilize "." para decimais');
        return;
    }

    const circuitData = {
        "circuits": [{
            "id": "C_5",
            "components": ["R_{1}", "R_{2}", "R_{3}", "R_{4}", "V_{1}", "I_{FD}", "I_{1}"],
            "values": [ex1.R1, ex1.R2, ex1.R3, ex1.R4, ex1.V1, ex1.IFD_gain, ex1.I1],
            "units": ["\\Omega", "\\Omega", "\\Omega", "\\Omega", "V", "\\cdot i_{a}", "A"]
        }]
    };    

    changeCircuitValues(circuitData);
}


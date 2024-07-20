function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro, divisão por zero";
    }
    return num1 / num2;
}


// função principal para interação com o usuário

function calculadora() {
    let num1 parseFloat(prompt("Digite o primeiro número:"));
    let num2 parseFloat(prompt("Digite o primeiro número:"));

let operacao = prompt("Escolha a operação que deseja realizar:\n1 - soma\n2 - subtracao\n3 - multiplicacao\n4 - divisao");

switch (operacao) {
    case '1'
    alert("Resultado:" + soma(num1, num2));
    breack;

    case '2'
    alert("Resultado:" + subtracao(num1, num2));
    breack;

    case '3'
    alert("Resultado:" + multiplicacao(num1, num2));
    breack

    case '4'
    alert("Resultado:" + divisao(num1, num2));
    breack
    
    default
    alert("Opção inválida.");
    }
}

// Chamando a função principal para iniciar a calculadora
calculadora();







/*// Funções para operações matemáticas
function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro: divisão por zero";
    }
    return num1 / num2;
}

// Função principal para interação com o usuário
function calculadora() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));

    var operacao = prompt("Escolha a operação que deseja realizar:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");

    switch (operacao) {
        case '1':
            alert("Resultado: " + soma(num1, num2));
            break;
        case '2':
            alert("Resultado: " + subtracao(num1, num2));
            break;
        case '3':
            alert("Resultado: " + multiplicacao(num1, num2));
            break;
        case '4':
            alert("Resultado: " + divisao(num1, num2));
            break;
        default:
            alert("Opção inválida.");
    }
}

// Chamando a função principal para iniciar a calculadora
calculadora();*/


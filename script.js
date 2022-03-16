// Gerar um número aleatorio de 0 a 10
var numeroSecreto = parseInt(Math.random() * 11);

// número de chutes total de 3
var tentativas = 2;

// verificar número de tentativas
function Chutar() {
    if (tentativas > 0) {
        ChutarNumero();
    }
// tentativas esgotadas
    else {
        resultado.innerHTML = "Você não tem mais tentativas! <br> O Número correto é " + numeroSecreto;
    }
}

// caso o usuario tenha tentativas
function ChutarNumero() {

    // Pegar chute do usuario no HTML
    var chute = parseInt(document.getElementById("valor").value);

    //Imprimir resultado no HTML
    var resultado = document.getElementById("resultado");

    // comparar valor digitado com o numero aleatorio
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou!!!"
    } 
    
    // usuario chutou número menor que 0 ou maior que 10
    else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um número de 0 a 10"    
    } 
    
    //  dar uma dica que o número digitado pelo usuario e menor que o número secreto
    else if (chute > numeroSecreto) {
        resultado.innerHTML = "O número que estou pensando e menor que " + chute ; tentativas--;
        }

    //  dar uma dica que o número digitado pelo usuario e maior que o número secreto
    else if (chute < numeroSecreto) {
    resultado.innerHTML = "O número que estou pensando e maior que " + chute ; tentativas--;
    }

}

// usuario tentar novamente
function tentarNovamente() {
 
    //definir um novo número secreto
    numeroSecreto = parseInt(Math.random() *11);

    //adicionar mais tentativas
    tentativas = 2;

    //zear resultado
    resultado.innerHTML = "Você tem 3 tentativas, boa sorte...";

    //zerar valor digitado 
    valor.value = "";
}
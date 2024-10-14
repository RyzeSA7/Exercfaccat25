// Função para calcular a soma dos dois maiores valores
function somaDosDoisMaiores() {
    
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    let valor2 = parseFloat(prompt("Digite o segundo valor:"))
    const valor3 = parseFloat(prompt("Digite o terceiro valor:"))

    // Inicializando um array com os valores
    let valores = [valor1, valor2, valor3]

    // Ordenando os valores em ordem decrescente
    valores.sort((a, b) => b - a);

    // Calculando a soma dos dois maiores valores
    let soma = valores[0] + valores[1]

    // Exibindo o resultado
    console.log(`A soma dos dois maiores valores é: ${soma}`)
}

// Chamando a função
somaDosDoisMaiores()
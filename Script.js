// Função para calcular o saldo e o rank
function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let rank;

    // Estrutura de decisão para classificar o jogador
    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    // Retorna o saldo e o rank
    return {
        saldo: saldo,
        rank: rank
    };
}

// Entrada de dados do jogador
let vitorias = parseInt(prompt("Digite o número de vitórias:"));
let derrotas = parseInt(prompt("Digite o número de derrotas:"));

// Chama a função e armazena o resultado
let resultado = calcularRank(vitorias, derrotas);

// Exibe o saldo e o rank do jogador
alert(`Saldo de Rankeadas: ${resultado.saldo}\nRank: ${resultado.rank}`);

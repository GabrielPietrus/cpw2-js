
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert() {

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.
    var people = document.getElementById("txtNomes").value;
    people = people.split(",");

    for (i = people.length - 1; i >= 0; i--) {
        document.write(people[i] + "<br>");
    }

    return [];
}
/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades) {

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    let media = 0
    for (let i = 0; i < grades.length; i++) {
        media = media + parseInt(grades[i])
    }
    media = media / grades.length
    return media;
}
let aluno = prompt("Digite o nome d@ alun@: ")
const notas = new Array

for (i = 0; i < 3; i++) {
    notas.push(prompt(`Informe a nota ${(i+1)}:`))
}

const media = mean(notas)
console.log(`Média: ${media}.\n`)

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean) {

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    if (mean < 7) {
        return "Reprovado!"
    } else {
        return "Parabnéns, aprovado!!!"
    }
}
console.log(isApproved(media))

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate) {
    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.
    let date = strDate.split("/");
    let day = date[0]; let month = date[1]; let year = date[2];

    switch (month) {

        case "01":
            month = "janeiro";
            break;

        case "02":
            month = "fevereiro";
            break;

        case "03":
            month = "março";
            break;

        case "04":
            month = "abril";
            break;

        case "05":
            month = "maio";
            break;

        case "06":
            month = "junho";
            break;

        case "07":
            month = "julho";
            break;

        case "08":
            month = "agosto";
            break;

        case "09":
            month = "setembro";
            break;

        case "10":
            month = "outubro";
            break;

        case "11":
            month = "novembro";
            break;

        case "12":
            month = "dezembro";
            break;

        default:
            return "";
    }

    return day + " de " + month + " de " + year;
}


// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}
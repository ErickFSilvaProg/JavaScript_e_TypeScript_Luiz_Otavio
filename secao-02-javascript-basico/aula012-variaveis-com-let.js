/** 
 * Crie variáveis com 'let', não utilise 'var'.
 * Não podemos redeclarar variáveis com 'let'.
 * Não podemos criar variáveis com palavras reservadas.
 * As variáveis precisam ter nomes significativos.
 * Não podemos iniciar o nome de variável com um número.
 * As variáveis não podem conter espaços ou traços.
 * Criamos variáveis no formato camelCase.
 * As variáveis são case-sensitive.
*/


let spouse; // Declarar uma variável e não inicializa-la retorna um valor 'undefined'.
console.log(spouse);
console.log();

/* Redeclarar a variável 'spouse' retarnaria um erro e pararia o sistema: SyntaxError: Identifier 'spouse' has already been declared */
// let spouse = "Lucas";

spouse = "Pedro"; // Inicializa a variável 'spouse' e atribui um valor.
console.log(spouse);
console.log();

spouse = "Vinícius"; // Reatribui um valor à variável 'spouse' (esposo).
let wife = "Bruna"; // 'Esposa'
let son = "Carlos"; // 'Filho'


console.log(`${spouse} nasceu em 1984.  `);
console.log(`Em 2000 ${spouse} conheceu ${wife}.`);
console.log(`${spouse} casou-se com ${wife} em 2012.`);
console.log(`${wife} teve 1 filho com ${spouse} em 2025.`);
console.log(`O filho de ${spouse} se chama ${son}.`);
console.log();
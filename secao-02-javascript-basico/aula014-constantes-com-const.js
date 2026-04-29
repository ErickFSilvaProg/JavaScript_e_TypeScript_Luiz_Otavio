/** 
 * Crie constantes com 'const'.
 * Não podemos criar constantes com palavras reservadas.
 * As constantes precisam ter nomes significativos.
 * Não podemos iniciar o nome de constante com um número.
 * As constantes não podem conter espaços ou traços.
 * Criamos constantes no formato camelCase.
 * As constantes são case-sensitive.
 * Não podemos modificar o valor de uma constante:
 * ↪   TypeError: Assignment to constant variable.
 * 
 * Não podemos declarar uma constante sem inicializa-la:
 * ↪   const nome;
 *      SyntaxError: Missing initializer in const declaration
 * 
 * String = texto
 * Number = número
 * 
 * A soma entre um number e um string resulta em uma concatenação entre ambos.
 * O javascript é uma linguagem de tipagem dinâmica e fraca.
 */


const fullName = "Erick Ferreira";
console.log(fullName);
console.log();

const firstNumber = 5;
const secondNumber = 10;
const thirdNumber = "5";
const result = firstNumber * secondNumber;
console.log(result);

const duplicateResult = result * 2;
console.log(duplicateResult);
console.log();

let tripledResult = result * 3;
console.log(tripledResult);

tripledResult += 5;
console.log(tripledResult);
console.log();


console.log(firstNumber);
console.log();


console.log(firstNumber, typeof firstNumber);
console.log(secondNumber, typeof secondNumber);
console.log(thirdNumber, typeof thirdNumber);
console.log();


console.log(thirdNumber + secondNumber, typeof(thirdNumber + secondNumber));
console.log();
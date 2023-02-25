const a = Number(prompt("digite o valor do seu salario"))
const b = Number(prompt("digite a porcentagem de aumento de seu salario"))

let resultado = b/100

console.log(resultado)

let resultadofinal = a * (1+ resultado)
console.log(resultadofinal)

document.write("seu salario passara a ser "+resultadofinal)
//document.write(resultado)
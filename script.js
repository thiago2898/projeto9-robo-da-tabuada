let number = parseInt(prompt('Digite um número.'))
let multiplier = 1
let solve = ''


for (multiplier; multiplier <= 20; multiplier++) {
    solve += `${number} x ${multiplier} = ${number * multiplier}\n`
}

alert(`A lista de resultados é: 

${solve}`)
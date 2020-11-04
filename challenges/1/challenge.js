/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (...arr) => {
    let value = arr.reduce((total, number)=> total + number)
    
    return value
}

module.exports = sumArguments

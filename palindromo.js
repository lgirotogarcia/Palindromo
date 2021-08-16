const palindromo = function (palavra){
    let contrario = ''

    for (let i = palavra.length-1; i >= 0; i--){
        contrario += palavra[i]
    }
    
    console.log() 
    
    if (palavra.toUpperCase() === contrario.toUpperCase()) {
        console.log(`A palavra "${palavra.toUpperCase()}" ao contrário é: "${contrario.toUpperCase()}". Essa palavra é um palíndromo!`)
    }
    else {
        console.log(`A palavra "${palavra.toUpperCase()}" ao contrário é: "${contrario.toUpperCase()}". Essa palavra não é um palíndromo.`)
    }
}

palindromo('Hannah')
palindromo('Leonardo')
//input --> colors in ENGLISH
//output --> same colors in SPANISH

//blue --> azul
//red --> rojo
//green --> verve
//white --> blanco
//black --> negro

//[azul, rojo, verve, blanco, negro]

function spanishSplitter(input) {
    let colors = ['blue', 'red', 'green', 'white', 'black', 'azul', 'rojo', 'verve', 'blanco', 'negro']

    //Take input and find index in color
    return colors[colors.indexOf(input) + 5]
    //Add five to that index and  return colors[newIndex]

    // return colors.indexOf(input)
    // let spanishColors =
    //return spanishColors[englishColors.indexOf(input)]
    //if input is in english dictionary
    //take the index of the element that it matches with
    //return the index in spanish list
}

//if blue then 0, etc.
//let colors = [azul, rojo, verve, blanco, negro]



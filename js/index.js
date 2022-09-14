const main = document.querySelector('#main')
const btnGenerateColor = document.querySelector('#btn_generate_color')
const getBackgroundColor = document.querySelector('#get_background_color')


// Valores hexadecimales
const hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


// Listener que ejecuta la función que genera un background aleatorio
btnGenerateColor.addEventListener('click', () => {
    generateColor()
})


// Función que genera y establece un background aleatorio al main
function generateColor() {
    let hash = '#'
    let color = ""

    for(let i = 0; i < 6; i++) {
        color = hash += hexadecimal[randomValues()]
    }
    main.style.background = color
    btnGenerateColor.textContent = 'background-color: ' + color
}


// Función que genera valores aleatorios
function randomValues() {
    return Math.floor(Math.random() * hexadecimal.length)
}

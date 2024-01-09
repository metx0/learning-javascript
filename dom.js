// se crea el elemento h1
const title = document.createElement('h1')
title.innerText = 'Titulo creado desde JS'

const button = document.createElement('button')
button.innerText = 'click me'

// el primer parámetro es el evento que escucha el botón
// si sucede el evento se ejecuta la función del segundo parámetro

button.addEventListener('click', function() {
    title.innerText = 'Cambiaste el título con el botón'
    alert("Hiciste click en el botón")
})

// se añade el elemento h1 al body de la página
document.body.append(title)
document.body.append(button)
// Las funciones anónimas se definen en el lugar donde se necesitan, por ejemplo, como argumento
// de una función

/* console.log(function() {    
    return 'Testing...'
}()) */

const isAuthorized = true
const backgroundColor = 'bisque'
const fontColor = 'crimson'

const button = document.createElement('button')
button.innerText = 'Click me'
// a la propiedad style se le asigna una cadena con reglas de CSS
// usamos el operador ternario
button.style = `background: ${isAuthorized ? backgroundColor : 'red'}; color: ${fontColor}`

const text = isAuthorized ? "you're good" : "gotta fuck off";
console.log(text)

button.addEventListener('click', () => {
    if (!isAuthorized) {
        console.log("You aren't authorized")
        return
    }

    console.log('You are authorized')
})

document.body.append(button)

// las funciones flecha son una forma más concisa de escribir funciones

const add = (a, b) => a + b

const add_ = (a, b) => {
    return a + b
}

// console.log(add_(10, 90))

// hay un return implícito si lo escribimos de esta forma
const showText = () => 'testing...'

// si queremos devolver un objeto de esta forma, existe una sintaxis especial
// envolvemos el objeto entre paréntesis
const showObject = () => ({ name: 'Pipo', age: 20 })

const someMan = showObject()
// console.log(someMan.name, someMan.age)
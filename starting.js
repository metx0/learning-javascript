// una función que retorna una función
function saludar(nombre) {
    return function() {
        return "hola " + nombre
    }
}

const result = saludar("Pepe")

// ahora result guarda la función que retornó saludar()
// ejecutamos result para poder ver el resultado

// console.log(result())

// se le da un valor por defecto al tercer parámetro, en caso de que queramos omitirlo
function sumar(a, b, c = 0) {
    return a + b + c
}

// console.log(sumar(20, -10))

// los objetos sirven para guardar atributos y valores en una sola variable
const user = {
    name: "Pepe",
    lastName: "Guzman",
    age: 18,
    // la propiedad adress es un objeto
    adress: {
        country: "Mexico",
        city: "Tabasco"
    },
    // devuelve una representación en string del atributo adress
    getAdress: function() {
        return `${this.name} lives in the country ${this.adress.country}, in the city ${this.adress.city}`
    },
    friends: [],
    sendMail(otherUser) {
        return 'sending mail to ' + otherUser + "..."
    }
}

console.log(user.sendMail('Alex'))
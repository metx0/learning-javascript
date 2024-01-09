const user1 = {
    name: 'Cristobal',
    age: 30,
    country: 'Mexico'
}

// la función espera un objeto como parámetro y retorna una cadena
// con las propiedades del objeto
function printInfo(user) {
    return `<h1>Hola ${user.name}, con edad de ${user.age}</h1>`
}

// console.log(printInfo(user1))

// El destructuring (destructuración) de objetos permite extraer propiedades de los objetos
// y asignarlos a variables para que sea más fácil trabajar con ellas
const { name, age, country } = user1
console.log(name, age, country)

// Podemos usar el destructuring en las funciones
function printInfo_(user) {
    // Aplicamos el destructuring para poder acceder a las variables sin la notación de punto
    const { name, age, country, city = 'Tabasco' } = user
    return `<h2>Hola, ${name}, con edad de ${age}, que vive en ${country}, probablemente en ${city}</h2>`
}

document.body.innerHTML = printInfo_(user1)
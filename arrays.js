const names = ['Pepe', 'Manuel', 'Gerardo']

// bucle for cuya variable de control i va desde 0 hasta 2
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// para hacer operaciones con arrays existen métodos 
// forEach espera una función como argumento, que se ejecuta por cada elemento
// names.forEach((name) => console.log(name))

// map se usa para crear un nuevo array en base a uno
const newNames = names.map((name) => {
    return `Hola ${name}`
})
// console.log(newNames)

// retorna el valor del elemento en donde la condición es verdadera
const nameToFound = names.find((name, index) => {
    if (name === 'Manuel') {
        return name
    }
})

// console.log(nameToFound)

const filteredNames = names.filter((name) => {
    if (name.length >= 5) {
        return name
    }
})

// console.log(filteredNames)

const nums = [0, 2, 4, 6]
const nums2 = [3, 5, 7, 9]
const allNums = nums.concat(nums2)
// console.log(allNums)

// usando el spread operator (...)

const newArr = [...nums, ...nums2]
console.log(newArr)

// también podemos usarlo con objetos

const user = {
    name: 'Cristobal',
    age: 30,
    country: 'Mexico'
}

const adress = {
    street: '42 #33',
    city: 'Tabasco',
}

// juntamos los dos objetos en uno solo usando el spread operator
// podemos verlo como que saca el contenido del objeto

const userInfo = {
    ...user,
    ...adress
}

console.log(userInfo)
// esto no altera a los objetos originales
console.log(user, adress)

const saludar = (nombre,edad) => {
    return (nombre) ? console.log(nombre.toUpperCase()) : console.log('NO HAY NOMBRE')
}

saludar(nombre: 'JESUS')

saludar(nombre: null, edad: 99)

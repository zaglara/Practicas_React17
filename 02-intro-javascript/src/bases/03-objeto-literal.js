const persona = {
    nombre: 'Leiza',
    apellido: 'Lara',
    edad: 45,
    direccion : {
        ciudad :'Monterrey',
        zip: 66072,
        lat: 10.2564,
        lng: 50.3648,
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);
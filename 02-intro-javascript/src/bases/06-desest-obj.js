const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//Asignacion desectructurante 1
const { nombre } = persona;
console.log(nombre);

//Asignacion desectructurante 2
const { nombre:nombre2 } = persona;
console.log(nombre2);

/*const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);*/

const retornaPersona = ({clave, nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.6948,
            lng: 46.2594,
        },
    }
}

//const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona);
const {nombreClave, anios, latlng} = retornaPersona(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);
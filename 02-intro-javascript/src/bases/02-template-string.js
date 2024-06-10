const nombre = 'Leiza';
const apellido = 'Lara';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSalud(nombre){
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSalud(nombre) }` );
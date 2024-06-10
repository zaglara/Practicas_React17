//DESESTRUCTURACIÓN DE ARREGLOS

const personajes = ['Leiza', 'Lara', 'Ruiz'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [ p1 ] = personajes;
console.log( p1 ); //Leiza

const [ , p2 ] = personajes;
console.log( p2 ); //Lara

const [ , , p3 ] = personajes;
console.log( p3 ); //Ruiz

const retornaArreglo = () => { 
    return ['abc', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//TAREA
// el primer valor del arreglo se llamará nombre
//el segundo se llamará setNombre
const state = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo') }];
}

const [nombre, setNombre] = state('Goku');

console.log(nombre);
setNombre();
const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => 
    `Hola ${nombre}`;

const saludar4 = () =>
    `Hola Mundo`;

const getUser = () => ({
    uid: 'ABCD123',
    username: 'El_Papi1205',
});

const user = getUser();

//saludar = 30;

//console.log(saludar('Leiza'));
console.log(saludar('Leiza'));
console.log(saludar2('Leiza'));
console.log(saludar3('Leiza'));
console.log(saludar4());
console.log(getUser());
console.log(user);

//Tarea
// Transformar a funcion de flecha
//Retornar un objeto implícito
function getUsuarioActivo (nombre) {
    return {
        uid: 'ABC457',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Leiza');
console.log(usuarioActivo);

//Resultado Tarea
const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC457',
    username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2('Alfred');
console.log(usuarioActivo2);
import heroes, { owners } from "../data/heroes"; //heroes y Tab para importacion rápida

console.log(owners)
console.log(heroes);

//Buscar Heroe 1
/*const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id === id){
            return true;
        }
        else{
            return false;
        }
    }); 
}*/

//Buscar Heroe 2
/*const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}*/

//Buscar Heroe 3
const getHeroeById = (id) => 
    heroes.find(heroe => heroe.id === id);

console.log(getHeroeById(3));

//Find no sirve porque solo regresa uno
const getHeroeByOwner = (owner) => 
heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroeByOwner('Marvel'));

export {getHeroeById, getHeroeByOwner};
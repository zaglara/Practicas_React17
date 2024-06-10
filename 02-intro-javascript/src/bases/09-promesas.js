// 3-22 Promesas

import {getHeroeById} from "./08-imp-exp";

const getHeroeByIdAsync = ( id ) => {
    const promesa = new Promise( (resolve, reject)=> {

        setTimeout( () => {
    
            //IMPORTAR DE IMP EXP EL GETHEROBYID
            const heroe = getHeroeById(id);
            if (heroe){
                resolve(heroe);
            }
            else{
                reject('No se pudo encontrar el héroe');
            }
            
        }, 2000 );
    
    });
    return promesa;
}

getHeroeByIdAsync(4)
    .then( console.log )
    .catch( console.warn );

/*const promesa = new Promise( (resolve, reject)=> {

    setTimeout( () => {

        //IMPORTAR DE IMP EXP EL GETHEROBYID
        const heroe = getHeroeById(id);
        resolve(heroe);
        //reject('No se pudo encontrar el héroe');

        //console.log('2 segundos después');
        //resolve(); //Hay que llamar esto para que se ejecute el then
        //reject();
    }, 2000 );

});
*/

/*promesa.then( (heroe) => {
    console.log('heroe', heroe);
})
.catch( err => console.warn(err));*/
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => { 
    test('Debe retornar un heroe por id', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('Debe retornar un undefined si heroe no existe', () => { 
        const id = 10;
        const heroe = getHeroeById(id);
        console.log(heroe);

        expect(heroe).toBe(undefined);
    })

    test('Debe retornar arreglo con heroes de DC', () => { 
        const owner = 'DC';
        const heroesTest = getHeroesByOwner(owner);
        console.log(heroesTest);

        expect(heroesTest).toEqual(heroes.filter(h => h.owner == owner))

    })

    test('Debe retornar arreglo con heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroesTest = getHeroesByOwner(owner);
        console.log(heroesTest);

        expect(heroesTest.length).toBe(2);

    })

 })
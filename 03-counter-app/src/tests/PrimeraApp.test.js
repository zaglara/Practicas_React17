import React from 'react';
//import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe('Pruebas en <Primera App />', () => { 
    /*test('debe de mostrar el mensaje "Hola, Soy Goku" ', () => { 
        const saludo = 'Hola, soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo}/>);

        expect( getByText(saludo) ).toBeInTheDocument();
    });*/

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku'; 
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el subtitulo enviado por props', () => { 
        const saludo = 'Hola, Soy Goku'; 
        const subTitulo = 'Soy el subtitulo de la prueba'; 
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
            /> 
        );
        const textoParrafo = wrapper.find('p').text();    //Equivale a querySelector
        console.log(textoParrafo);
        expect( textoParrafo ).toBe( subTitulo );
    });

 });
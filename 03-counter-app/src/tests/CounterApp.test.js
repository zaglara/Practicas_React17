import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas de <CounterApp />', () => {

    /*const wrapper = shallow(<CounterApp/>);*/
    let wrapper = shallow(<CounterApp/>);

    beforeEach(() =>{
        wrapper = shallow(<CounterApp/>);
    })

    test('Debe mostrar correctamente con sus valores por defecto', () => {       
        //console.log(wrapper);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        //const valor = 100;
        const wrapper = shallow(
            <CounterApp
                value={100}
            />
        );
        const valorContador = wrapper.find('h2').text().trim();    //Equivale a querySelector
        console.log(valorContador);
        expect( valorContador ).toBe( '100' );
    });

    test('Debe de incrementar con el botón +1', () => {
        /*const btn1 = */wrapper.find('button').at(0).simulate('click');
        const valorContador = wrapper.find('h2').text().trim();
        expect(valorContador).toBe('11');
    });

    test('Debe de decrementar con el botón -1', () => {
        /*const btn3 = */wrapper.find('button').at(2).simulate('click');
        const valorContador = wrapper.find('h2').text().trim();
        expect(valorContador).toBe('9');
    });

    test('Debe de colocar el valor por defecto con boton reset', () => {
        const wrapper = shallow(
            <CounterApp
                value={105}
            />
        );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valorContador = wrapper.find('h2').text().trim();
        console.log(valorContador);

        expect(valorContador).toBe('105');
    });

});
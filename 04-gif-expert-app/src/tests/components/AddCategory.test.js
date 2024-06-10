import React from 'react';
import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target:{value}}); //target: {value: value} es el evento setInputValue(e.target.value)

       expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe hacer submit si no hay texto', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled();
        //expect(wrapper).toMatchSnapshot;
    });

    test('Debe de llamar setCategories y limpiar la caja de texto', () => {
        // 1. simular el inputChange
        // 2. simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. el valor de input debe de estar ''

        let value = 'Hola mundo tarea';
        wrapper.find('input').simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); //Que solo se llamara una vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Ver que se llamara como funcion

        expect(wrapper.find('input').prop('value')).toBe('');

    });

});
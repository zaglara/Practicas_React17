import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem />', () => {

    const title = 'Titulo prueba',
        url = 'https://localhost.algo.jpg',
        wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener un img igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    });

});
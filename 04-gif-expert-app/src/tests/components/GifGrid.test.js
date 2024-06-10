import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    /*beforeEach(() => {
        //jest.clearAllMocks();
        const wrapper = shallow(<GifGrid category={category} />);
    });*/

    test('Mostrar el elemento', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuado se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    });

});
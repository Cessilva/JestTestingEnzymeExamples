/* eslint-disable */
import React from 'react';
// permite trabajar con elementos, montarlo en el dom
// y trabajar sobre la busqueda de algun elelmento,
// o trabajar con cada uno de los items que pueda tener la presentacion del componente
import { mount } from 'enzyme'; //pruebas a componentes en react
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  test('Render el Footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});

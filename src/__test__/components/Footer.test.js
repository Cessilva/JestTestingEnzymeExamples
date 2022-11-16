import React from 'react';
// permite trabajar con elementos, montarlo en el dom
// y trabajar sobre la busqueda de algun elelmento,
// o trabajar con cada uno de los items que pueda tener la presentacion del componente
import { mount } from 'enzyme'; //pruebas a componentes en react
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find(".Footer-title").text()).toEqual('Platzi Store');
  });
});
describe('Footer Snapshot', () => {
  test('Comprobar la ui del componente footer', () => {
    // si footer necesitara del provider lo agregamos , si no no 
    const footer= create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
    // si no existe el snapchot lo crea y lo comprueba, si ya existe , los compara
  });
});

// SnapShots nos permiten probar la ui y establecer una regla cuando tenemos componentes 
// que no cambian gradualmente, lo hacemos para componentes como el footer que no cambian 
// y para saber que una estructura siempre sea la misma , para poder utilizarlos , debemos convertir
// nuestro componente a un objeto json , para eso necesitamos :react-test-renderer 

// ESTOS TESTS SON NECESARIOS CUANDO NUESTRO UI NO CAMBIA
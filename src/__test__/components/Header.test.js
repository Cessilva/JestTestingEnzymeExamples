import React from 'react';
// permite trabajar con elementos, montarlo en el dom
// y trabajar sobre la busqueda de algun elelmento,
// o trabajar con cada uno de los items que pueda tener la presentacion del componente
import { mount, shallow } from 'enzyme'; //pruebas a componentes en react
//Shallow nos premite traer elementos y probarlos como una unidad, 
// solo necesito algo particular del componente, pero no su estructura ni sus elementos del dom
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

// el provider mocck se encarga de mandar lo que necesita header para poder utilizarse
describe('<Header />', () => {
  
  test('Render del componente Header', () => {
    // Aqui no necesitamos todos los beneficios del dom 
    const header = shallow(
        <ProviderMock>
            <Header />
        </ProviderMock>
      );
    expect(header.length).toEqual(1);
  });
  // En caso de no poner los providers, nos podria aparecer lo siguiente:
  // could not find "store" in the context of "Connect(Header)". 
  // Either wrap the root component in a <Provider>, or pass a custom React
  //  context provider to <Provider> and the corresponding React context
  //  consumer to Connect(Header) in connect options.
  test('Render del titulo', () => {
    // Aqui si necesitamos los beneficios del dom
    const header = mount(
        <ProviderMock>
            <Header />
        </ProviderMock>
      );
    expect(header.find(".Header-title").text()).toEqual("Platzi Store");
  });
});

describe('Header Snapshot', () => {
  test('Comprobar la ui del componente header', () => {
    const header= create( <ProviderMock>
      <Header />
  </ProviderMock>);
    expect(header.toJSON()).toMatchSnapshot();
    // si no existe el snapchot lo crea y lo comprueba, si ya existe , los compara
  });
});

// Nota: mount prueba con todos los beneficios del dom y shallow prueba solamente algo particular de un elemento
//Cuando quieras actualizar snapshots en terminal escribes
// jest --updateSnapshots
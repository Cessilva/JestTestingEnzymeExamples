import React from 'react';
import { mount, shallow } from 'enzyme'; 
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock'
import ProviderMock from '../../__mocks__/ProviderMock';

// El producto recibe del props contenido que se va a renderizar desde el product
// necesitamos crear otro mock
describe('<Product />', () => {  
  test('Render del componente Product', () => {
    const product = shallow(
        <ProviderMock>
            <Product />
        </ProviderMock>
      );
    expect(product.length).toEqual(1);
    // Significa que si esta haciendo render
  });
  test('Comprobar el boton de comprar', () => {
    // vamos a probar el click, jest.fn es una funcion que jest probe
    const handleAddToCart = jest.fn();
    const wrapper = mount(
        <ProviderMock>
            <Product 
            product={ProductMock}
            handleAddToCart={handleAddToCart}
            />
        </ProviderMock>
      );
    wrapper.find('button').simulate('click')
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    // Significa que si esta haciendo render
  });
});

// Nota: mount prueba con todos los beneficios del dom y shallow prueba solamente algo particular de un elemento
// SnapShots nos permiten probar la ui y establecer una regla cuando tenemos componentes 
// que no cambian gradualmente, lo hacemos para componentes como el footer que no cambian 
// y para saber que una estructura siempre sea la misma 

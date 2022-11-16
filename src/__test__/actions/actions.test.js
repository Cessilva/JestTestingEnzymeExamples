// vamos a probar los actions que requiere nuestro proyecto para trabajar con redux
// partimos de las funciones que se tienen para saber que funciones
// const addToCart = payload => ({
//     type: 'ADD_TO_CART',
//     payload,
//   });
//   const removeFromCart = payload => ({
//     type: 'REMOVE_FROM_CART',
//     payload,
//   });
import actions from "../../actions";
import ProductMock from "../../__mocks__/ProductMock";

describe('Actions', () => {
    
    test('addToCart action', () => {
      const payload =ProductMock;
      const expected = {
        type: 'ADD_TO_CART',
        payload
      }
      expect(actions.addToCart(payload)).toEqual(expected);
    });

    test('removeFromCart action', () => {
        const payload = ProductMock;
        const expected = {
          type: 'REMOVE_FROM_CART',
          payload
        }
        expect(actions.removeFromCart(payload)).toEqual(expected);
    });
});
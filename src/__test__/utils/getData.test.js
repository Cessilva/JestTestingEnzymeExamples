// En esta clase haremos pruebas a una peticion fetch
//  para poder trabajar con fetch y poder hacer las peticiones , necesitamos un mock ,
// es complicado por lo que ocuparemos una herramienta  jest-fetch-mockç
// prepara nuestro entorno para poder trabajar con este mock se añade config en setupTest.js
import getData from "../../utils/getData";
describe('Fetch API',()=>{
    beforeEach(()=>{
        fetch.resetMocks();
    });
    test('Llamar api y retornar datos',()=>{
        fetch.mockResponseOnce(JSON.stringify({data:'12345'}));
        getData('https://google.com')
        .then((response)=>{
            expect(response.data).toEqual('12345')
        })
        expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    })
});
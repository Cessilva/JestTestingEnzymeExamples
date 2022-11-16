/* eslint-disable */
// uso del adapter de enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.fetch =require('jest-fetch-mock');
// para que funcione en cada uno de los archivos que vamos a utilizar , en el package json se pone lo siguiente
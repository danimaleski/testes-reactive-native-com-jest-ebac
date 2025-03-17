import * as React from 'react';
import { expect } from '@jest/globals'
import renderer from 'react-test-renderer';
import App from './App';


test('tela deve ser renderizada corretamente', () => {
    const app = renderer.create(<App>Tirar print teste</App>).toJSON();
    expect(app).toMatchSnapshot();
}); 
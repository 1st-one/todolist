import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter()});

describe('<App />', () => {
    it('should display Todo List', () => {
        const wrappedComponent = shallow(<App />);
        expect(wrappedComponent.find('TodoList').exists()).toBeTruthy();
    })
});
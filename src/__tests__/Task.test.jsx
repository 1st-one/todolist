import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Task from '../Task';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

configure({ adapter: new Adapter() });

describe('<Task />', () => {
    it('should display done task', () => {
        const props = {
            text: 'Task 1',
            id: 'some-id-1',
            done: true,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task {...props} />);


        expect(wrappedComponent).toMatchSnapshot();
    });

    it('should display undone task', () => {
        const props = {
            text: 'Task 1',
            id: 'some-id-1',
            done: false,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task {...props} />);


        expect(wrappedComponent).toMatchSnapshot();
    });

    it('should update task on checkbox checked', () => {
        const props = {
            text: 'Task 1',
            id: 'some-id-1',
            done: false,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task {...props} />);
        wrappedComponent.find('.list-item__checkbox').simulate('change');


        expect(props.onChange).toBeCalledWith(props.id);
    });

    it('should delete task if you clicked on button', () => {
        const props = {
            text: 'Task 1',
            id: 'some-id-1',
            done: false,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task {...props} />);
        wrappedComponent.find('.list-item__delete-btn').simulate('click');


        expect(props.onDelete).toBeCalledWith(props.id); 
    });

});
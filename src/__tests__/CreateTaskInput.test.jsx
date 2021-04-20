import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import CreateTaskInput from '../CreateTaskInput';

configure({ adapter: new Adapter() });

describe('<CreateTaskInput />', () => {
    it('should create Task on submit', () => {
        const mockOnCreate = jest.fn();

        const wrappedComponent = shallow(
            <CreateTaskInput onCreate={mockOnCreate} />
        );
        const fakeEvent = { target: { value: 'Visit a doctor' } };
        wrappedComponent
            .find('.task-input')
            .simulate('change', fakeEvent)
        wrappedComponent.find('.btn').simulate('click');

        expect(mockOnCreate).toBeCalledWith('Visit a doctor');
    });

    it('should input clear after submit', () => {
        const mockOnCreate = jest.fn();

        const wrappedComponent = shallow(
            <CreateTaskInput onCreate={mockOnCreate}/>
        );
        const fakeEvent = { target: { value: 'Visit a doctor' } };
        wrappedComponent
            .find('.task-input')
            .simulate('change', fakeEvent);
        wrappedComponent.find('.btn').simulate('click');

        expect(wrappedComponent.find('.task-input').prop('value')).toEqual('');
    })
});
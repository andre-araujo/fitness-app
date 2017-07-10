import React from 'react';
import { shallow } from 'enzyme';

import DashboardAddItem from './index';

jest.mock('./container', () => {
    return (component, props) => component;
}, {virtual: true});

describe('DashboardAddItem component', () => {
    it('should render without crashing', () => {
        shallow(<DashboardAddItem />);
    });

    describe('addFood behaviour', () => {
        const addFoodSpy = jest.fn();
        const wrapper = shallow(<DashboardAddItem addFood={addFoodSpy}/>);

        it('should have a text input', () => {
            expect(wrapper.find('input[type="text"]')).toBeTruthy();
        });

        it('should have a submit input', () => {
            expect(wrapper.find('input[type="submit"]')).toBeTruthy();
        });

        it('should have a form', () => {
            expect(wrapper.find('form')).toBeTruthy();
        });

        it('should set foodName state when _foodNameInputChange is called', () => {
            wrapper.setState({ foodName: '' });
            wrapper.instance()._foodNameInputChange('some text');

            expect(wrapper.state('foodName')).toBe('some text');
        });

        it('should not trigger addFood prop if state.foodName is empty when form is submited', () => {
            wrapper.setState({ foodName: '' });

            const form = wrapper.find('form');

            form.simulate('submit', {
                preventDefault: jest.fn()
            });

            expect(addFoodSpy.mock.calls.length).toBe(0);
        });

        it('should trigger addFood prop if state.foodName have text when form is submited', () => {
            wrapper.setState({ foodName: 'some text' });

            const form = wrapper.find('form');

            form.simulate('submit', {
                preventDefault: jest.fn()
            });

            expect(addFoodSpy.mock.calls.length).toBe(1);
        });

        it('should have an error message if error prop is true', () => {
            const wrapper = shallow(<DashboardAddItem error/>);

            expect(wrapper.find('.dashboard-add-item__error')).toBeTruthy();
        });
    });
});

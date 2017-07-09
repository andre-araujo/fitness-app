import React from 'react';
import { shallow } from 'enzyme';

import DashboardItem from './index';

jest.mock('./container', () => {
    return (component) => component;
}, {virtual: true});

describe('DashboardItem component', () => {
    it('should render without crashing if it have a title prop', () => {
        shallow(<DashboardItem title="test" />);
    });

    it('should render item info if info prop is an object', () => {
        const wrapper = shallow(
            <DashboardItem
                info={{
                    test: 'testing'
                }}
            />
        );
        
        expect(wrapper.contains(
            <p
                key="0"
                className="dashboard-item__text">
                <span>test: </span>
                <span>testing</span>
            </p>
        )).toBeTruthy();
    });

    describe('removeItem behaviour', () => {
        const removeFoodSpy = jest.fn();
        const wrapper = shallow(
            <DashboardItem
                title="test"
                id="someid"
                removeFood={removeFoodSpy}
            />
        );

        it('should have a .dashboard-item__delete item element', () => {
            expect(wrapper.find('.dashboard-item__delete')).toBeTruthy();
        });

        it('should trigger removeFood prop with item id when .dashboard-item__delete is clicked', () => {
            const deleteItem = wrapper.find('.dashboard-item__delete');

            deleteItem.simulate('click');

            expect(removeFoodSpy).toHaveBeenCalledWith('someid');
        });
    });
});

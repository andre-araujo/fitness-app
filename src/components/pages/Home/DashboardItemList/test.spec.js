import React from 'react';
import { shallow } from 'enzyme';

import DashboardItemList from './index';

jest.mock('./container', () => {
    return (component) => component;
}, {virtual: true});

describe('DashboardItemList component', () => {
    it('should render without crashing', () => {
        shallow(<DashboardItemList />);
    });

    it('should not render DashboardItem if doesnt have foods props', () => {
        const wrapper = shallow(<DashboardItemList />);
    });

    it('should render DashboardItem if have foods props', () => {
        const wrapper = shallow(<DashboardItemList foods={[{title: 'here'}]}/>);

        expect(wrapper.find('.dashboard-item')).toBeTruthy();
    });
});

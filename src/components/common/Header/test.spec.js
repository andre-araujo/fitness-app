import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header component', () => {
    it('should render without crashing', () => {
        shallow(<Header />);
    });

    it('should have a title', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1').exists()).toBeTruthy();
    });
});

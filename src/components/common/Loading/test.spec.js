import React from 'react';
import { shallow } from 'enzyme';

import Loading from './index';

jest.mock('./container', () => {
    return (component) => component;
}, {virtual: true});

describe('Loading component', () => {
    it('should render without crashing', () => {
        shallow(<Loading />);
    });

    it('should have an active class when receive loading prop', () => {
        const wrapper = shallow(<Loading loading/>);
        expect(wrapper.find('.loading--active').exists()).toBeTruthy();
    });

    it('should not have an active class when loading prop is falsy', () => {
        const wrapper = shallow(<Loading/>);
        expect(wrapper.find('.loading--active').exists()).toBeFalsy()
    });
});

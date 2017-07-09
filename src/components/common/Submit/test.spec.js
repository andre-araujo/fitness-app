import React from 'react';
import { shallow } from 'enzyme';

import Submit from './index';

describe('Submit component', () => {
    it('should render without crashing', () => {
        shallow(<Submit />);
    });

    it('should have a value in sync with text prop', () => {
        const wrapper = shallow(<Submit text="testing"/>);

        expect(
            wrapper.find('input').contains(
                <input type="submit" className="submit" value={'testing'} />
        )).toBeTruthy();
    });
});

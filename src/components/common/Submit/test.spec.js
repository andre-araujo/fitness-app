import React from 'react';
import { shallow } from 'enzyme';

import Submit from './index';

describe('Submit component', () => {
    it('should render without crashing', () => {
        shallow(<Submit />);
    });
});

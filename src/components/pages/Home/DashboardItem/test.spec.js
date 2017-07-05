import React from 'react';
import { shallow } from 'enzyme';

import DashboardItem from './index';

describe('DashboardItem component', () => {
    it('should render without crashing', () => {
        shallow(<DashboardItem />);
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import DashboardHeader from './index';

describe('DashboardItem component', () => {
    it('should render without crashing', () => {
        shallow(<DashboardHeader />);
    });
});

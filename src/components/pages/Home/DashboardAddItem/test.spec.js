import React from 'react';
import { shallow } from 'enzyme';

import DashboardAddItem from './index';

describe('DashboardAddItem component', () => {
    it('should render without crashing', () => {
        shallow(<DashboardAddItem />);
    });
});

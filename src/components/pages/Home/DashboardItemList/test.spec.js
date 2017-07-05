import React from 'react';
import { shallow } from 'enzyme';

import DashboardItemList from './index';

describe('DashboardItemList component', () => {
    it('should render without crashing', () => {
        shallow(<DashboardItemList />);
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import Container from './index';

describe('Container component', () => {
    it('should render without crashing if have a children', () => {
        shallow(
            <Container>
                <div>test</div>
            </Container>
        );
    });
});

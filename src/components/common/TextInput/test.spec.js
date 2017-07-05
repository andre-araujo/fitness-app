import React from 'react';
import { 
    shallow,
    mount
} from 'enzyme';

import TextInput from './index';

describe('TextInput component', () => {
    const props = {
        value: '',
        name: 'nameMock',
        label: 'labelMock',
        onChangeText: jest.fn(),
    }

    it('renders without crashing', () => {
        shallow(<TextInput {...props} />);
    });

    it('should render a label with labelMock text with empty class if value is blank', () => {
        const labelMock = 
            <label
                className="text-input__label text-input__label--empty"
                htmlFor="#nameMock">
                labelMock
            </label>;
    
        const textInput = shallow(<TextInput {...props} />);

        expect(textInput.contains(labelMock)).toBe(true);
    });

    describe('should trigger onChange events', () => {
        const labelMock =
            <label
                className="text-input__label"
                htmlFor="#nameMock">
                labelMock
            </label>;

        const textInput = mount(<TextInput {...props} />);
        const input = textInput.find('input');

        it('should render a label without labelMock text without empty class when value is changed', () => {
            input.simulate('change', {
                target: {
                    value: 'value'
                }
            });

            expect(textInput.contains(labelMock)).toBe(true);
        });

        it('should trigger onChangeText prop callback when value is changed', () => {
            input.simulate('change', {
                target: {
                    value: 'value'
                }
            });

            expect(props.onChangeText.mock.calls.length).toBeGreaterThanOrEqual(1);
        });

        it('should not break if onChangeText prop is missing when try to change value', () => {
            const props = {
                label: 'test'
            };
            const textInput = mount(<TextInput {...props} />);
            const input = textInput.find('input');

            input.simulate('change', {
                target: {
                    value: 'value'
                }
            });
        });
    });
});

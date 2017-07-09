import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isString } from '../../../lib';
import './styles.css';

function TextInput({
    value,
    name,
    label,
    onChangeText
}) {
    const isEmpty = !(isString(value) && value.length > 0);
    const labelClassName = classNames([
        'text-input__label',
        {
            'text-input__label--empty': isEmpty
        }
    ]);

    return (
        <div className="text-input">
            <div className="text-input__content">
                <label
                    htmlFor={name}
                    className={labelClassName}>
                    {label}
                </label>
                <input
                    id={name}
                    type="text"
                    className="text-input__field"
                    value={value}
                    name={name}
                    onChange={e => onChangeText(e.target.value)}
                />
            </div>
        </div>
    );
}

TextInput.defaultProps = {
    value: '',
    name: '',
    onChangeText: null,
    label: 'label',
};

TextInput.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func
};

export default TextInput;

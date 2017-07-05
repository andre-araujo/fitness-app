import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isString } from '../../../lib';
import './styles.css';

class TextInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEmpty: true
        };
    }

    componentDidMount() {
        this._checkEmptyValue(this.props.value);
    }

    _checkEmptyValue(value) {
        if (isString(value) && value.length > 0) {
            this.setState({
                isEmpty: false
            });
        } else {
            this.setState({
                isEmpty: true
            });
        }
    }

    _onChangeText = (e) => {
        const onChangeText = this.props.onChangeText;
        const newValue = e.target.value;

        this._checkEmptyValue(newValue);

        if (onChangeText) {
            onChangeText(newValue);
        }
    };

    render() {
        const {
            value,
            name,
            label
        } = this.props;

        const labelClassName = classNames([
            'text-input__label',
            {
                'text-input__label--empty': this.state.isEmpty
            }
        ]);

        return (
            <div className="text-input">
                <label
                    htmlFor={`#${name}`}
                    className={labelClassName}>
                    {label}
                </label>
                <input
                    id={name}
                    type="text"
                    className="text-input__field"
                    value={value}
                    name={name}
                    onChange={this._onChangeText}
                />
            </div>
        );
    }
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

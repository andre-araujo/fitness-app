import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Radio({
    id,
    label,
    name,
    checked
}) {
    return (
        <div className="radio">
            <input
                id={id}
                type="radio"
                name={name}
                className="radio__field"
                checked={checked}
            />
            <label
                htmlFor={id}
                className="radio__label">
                {label}
            </label>
        </div>
    );
}

Radio.defaultProps = {
    id: null,
    label: 'Submit',
    name: null,
    checked: null
}

Radio.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool
}

export default Radio;

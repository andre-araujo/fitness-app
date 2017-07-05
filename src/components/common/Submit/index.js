import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Submit({
    text
}) {
    return (
        <input
            type="submit"
            value={text}
            className="submit"
        />
    );
}

Submit.defaultProps = {
    text: 'Submit'
}

Submit.propTypes = {
    text: PropTypes.string
}

export default Submit;

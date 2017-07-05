import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Container(props) {
    return (
        <div className="container">
            { props.children }
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.element.isRequired
}

export default Container;

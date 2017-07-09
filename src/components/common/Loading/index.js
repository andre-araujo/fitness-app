import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import container from './container';
import './styles.css';

function Loading({
    loading
}) {
    const className = classNames([
        'loading',
        {
            'loading--active': loading
        }
    ]);

    const dots = []

    for (let index = 0; index < 3; index += 1) {
        dots.push(
            <span
                key={index}
                className="loading__dot"
            />
        );
    }

    return (
        <div className={className}>
            {dots}
        </div>
    );
}

Loading.defaultProps = {
    loading: null
}

Loading.propTypes = {
    loading: PropTypes.bool
}

export default container(Loading);

import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function DashboardHeader({
    title,
    icon
}) {
    return (
        <header className="dashboard-header">
            <h2 className="dashboard-header__title">
                <i
                    className={`fa fa-${icon} dashboard-header__icon`}
                    aria-hidden="true"
                />
                {title}
            </h2>
        </header>
    );
}


DashboardHeader.defaultProps = {
    title: '',
    icon: null
}

DashboardHeader.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
}


export default DashboardHeader;

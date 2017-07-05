import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function DashboardItem({
    title
}) {
    return (
        <section className="dashboard-item">
            <header className="dashboard-item__header">
                <h3 className="dashboard-item__title">
                    { title }
                </h3>
            </header>
            <div className="dashboard-item__content">
                
            </div>
        </section>
    );
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired
}

export default DashboardItem;

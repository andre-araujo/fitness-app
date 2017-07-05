import React from 'react';
import PropTypes from 'prop-types';

import DashboardItem from '../DashboardItem';
import './styles.css';

function DashboardItemList() {
    return (
        <section className="dashboard-item-list">
            <header className="dashboard-item-list__header">
                <h2 className="dashboard-item-list__title">
                    <i
                        className="fa fa-cutlery dashboard-item-list__icon"
                        aria-hidden="true"
                    />
                    Food items
                </h2>
            </header>
            <ul className="dashboard-item-list__content">
                <DashboardItem title="tika massala" />
            </ul>
        </section>
    );
}

export default DashboardItemList;

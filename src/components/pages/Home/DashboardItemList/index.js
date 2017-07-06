import React from 'react';

import container from './container';
import DashboardHeader from '../DashboardHeader';
import DashboardItem from '../DashboardItem';
import './styles.css';

function DashboardItemList(props) {
    const {
        foods
    } = props;

    return (
        <section className="dashboard-item-list">
            <DashboardHeader
                title="Daily menu"
                icon="cutlery"
            />
            <ul className="dashboard-item-list__content">
                {
                    foods.map((item, index) => (
                        <DashboardItem
                            key={index}
                            {...item}
                        />
                    ))
                }
            </ul>
        </section>
    );
}

export default container(DashboardItemList);

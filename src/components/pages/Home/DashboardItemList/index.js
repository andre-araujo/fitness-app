import React from 'react';
import PropTypes from 'prop-types';

import DashboardHeader from '../DashboardHeader';
import DashboardItem from '../DashboardItem';
import './styles.css';

function DashboardItemList() {
    const itemsMock = [
        {
            title: 'tikka massala',
            image: '',
            info: {
                calories: '23 cal',
                sodium: '31 g',
                fat: '21 g'
            }
        }
    ];

    return (
        <section className="dashboard-item-list">
            <DashboardHeader
                title="Daily menu"
                icon="cutlery"
            />
            <ul className="dashboard-item-list__content">
                {
                    itemsMock.map((item, index) => (
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

export default DashboardItemList;

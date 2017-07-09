import React, { Component } from 'react';
import PropTypes from 'prop-types';

import container from './container';
import DashboardHeader from '../DashboardHeader';
import DashboardItem from '../DashboardItem';
import './styles.css';

class DashboardItemList extends Component {
    componentDidMount() {
        this.props.getAllFoods();
    }

    render() {
        const {
            foods
        } = this.props;

        return (
            <section className="dashboard-item-list">
                <DashboardHeader
                    title="Daily menu"
                    icon="cutlery"
                />
                <ul className="dashboard-item-list__content">
                    {
                        foods.map((item, index) => (
                            <li
                                key={index}
                                className="dashboard-item-list__item">
                                <DashboardItem
                                    {...item}
                                />
                            </li>
                        ))
                    }
                </ul>
            </section>
        );
    }
}

DashboardItemList.defaultProps = {
    foods: []
}

DashboardItemList.propTypes = {
    foods: PropTypes.arrayOf(
        PropTypes.object
    )
}

export default container(DashboardItemList);

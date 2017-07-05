import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function DashboardItem({
    title,
    image,
    calories,
    sodium,
    fat
}) {
    return (
        <li className="dashboard-item">
            <section>
                <header className="dashboard-item__header">
                    <h3 className="dashboard-item__title">
                        { title }
                    </h3>
                </header>
                <div className="dashboard-item__content">
                    <div
                        style={{
                            backgroundImage: `url(${image})`
                        }}
                        className="dashboard-item__image">

                        {
                            !image &&
                            <div className="dashboard-item__no-image">
                                <i
                                    className="fa fa-file-image-o"
                                    aria-hidden="true"
                                />
                                <span>No image found!</span>
                            </div>
                        }

                    </div>

                    {
                        calories &&
                        <p className="dashboard-item__text">Calories: {calories}</p>
                    }

                    {
                        sodium &&
                        <p className="dashboard-item__text">Sodium: {sodium}</p>
                    }

                    {
                        fat &&
                        <p className="dashboard-item__text">Fat: {fat}</p>
                    }
                </div>
            </section>
        </li>
    );
}

DashboardItem.defaultProps = {
    title: PropTypes.string.isRequired,
    image: null,
    calories: null,
    sodium: null,
    fat: null
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    calories: PropTypes.string,
    sodium: PropTypes.string,
    fat: PropTypes.string
}

export default DashboardItem;

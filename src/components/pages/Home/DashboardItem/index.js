import React from 'react';
import PropTypes from 'prop-types';

import container from './container';
import './styles.css';

function DashboardItem({
    id,
    title,
    image,
    info,
    removeFood
}) {
    const infoKeys = Object.keys(info);
    const infoRows = infoKeys.map((infokey, index) => (
        <p
            key={index}
            className="dashboard-item__text">
            <span>{infokey}: </span>
            <span>{info[infokey]}</span>
        </p>
    ));

    const _deleteFood = () => {
        removeFood(id);
    };

    return (
        <section className="dashboard-item">
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

                { infoRows }

                <div
                    role="presentation"
                    className="dashboard-item__delete"
                    onClick={_deleteFood}>
                    <i
                        className="fa fa-trash dashboard-item__delete-icon"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
}

DashboardItem.defaultProps = {
    title: '',
    image: null,
    info: {}
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    info: PropTypes.shape({
        calories: PropTypes.string,
        sodium: PropTypes.string,
        fat: PropTypes.string
    })
}

export default container(DashboardItem);

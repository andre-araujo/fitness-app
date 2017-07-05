import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function DashboardItem({
    title,
    image,
    info
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

                    { infoRows }

                </div>
            </section>
        </li>
    );
}

DashboardItem.defaultProps = {
    title: '',
    image: null,
    info: null
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

export default DashboardItem;

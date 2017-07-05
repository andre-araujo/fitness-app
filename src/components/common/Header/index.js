import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import './styles.css';

function Header() {
    return (
        <nav className="header">
            <Container>
                <div className="header__content">
                    <h1>
                        FITNESS APP
                    </h1>
                </div>
            </Container>
        </nav>
    );
}

export default Header;

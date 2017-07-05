import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import './styles.css';

function Header() {
    return (
        <header className="header">
            <Container>
                <nav className="header__content">
                    <h1>
                        FITNESS APP
                    </h1>
                </nav>
            </Container>
        </header>
    );
}

export default Header;

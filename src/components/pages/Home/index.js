import React from 'react';

import Header from './../../common/Header';
import Container from './../../common/Container';
import DashboardAddItem from './DashboardAddItem';
import DashboardItemList from './DashboardItemList';
import './styles.css';

function Home() {

    return (
        <div className="homepage">
            <Header />
            <Container>
                <main className="homepage__content">
                    <DashboardAddItem />
                    <DashboardItemList />
                </main>
            </Container>
        </div>
    );
}

export default Home;

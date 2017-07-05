import React from 'react';

import Header from './../../common/Header';
import Container from './../../common/Container';
import AddDashboardItem from './AddDashboardItem';
import DashboardItemList from './DashboardItemList';
import './styles.css';

function Home() {

    return (
        <div className="homepage">
            <Header />
            <Container>
                <main className="homepage__content">
                    <AddDashboardItem />
                    <DashboardItemList />
                </main>
            </Container>
        </div>
    );
}

export default Home;

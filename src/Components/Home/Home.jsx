import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Shop />
            </Container>

        </>
    );
};

export default Home;
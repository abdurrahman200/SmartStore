import React from 'react';
import { Container } from 'react-bootstrap';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <>
            <Container className="bg-light">
                <Shop />
            </Container>

        </>
    );
};

export default Home;
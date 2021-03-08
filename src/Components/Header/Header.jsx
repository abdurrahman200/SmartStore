import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="secondary" variant="dark">
                <Container >
                    <Navbar.Brand href="home"> E-commerce </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/review">Order Review</Nav.Link>
                            <Nav.Link href="/manage">Manage Inventory</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
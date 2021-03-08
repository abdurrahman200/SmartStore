import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData from '../../assets/fakeData';
import { getDatabaseCart } from '../../assets/utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        // cart 
        const savedCart = getDatabaseCart()
        const productKey = Object.keys(savedCart)

        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])
    return (
        <>
            <Container className="bg-light">
                {cart.map(pd => <ReviewItems product={pd} key={pd.key} />)}
            </Container>
        </>
    );
};

export default Review;
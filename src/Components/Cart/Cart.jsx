import { Button, Card, Table } from 'react-bootstrap';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10);
    const grandTotal = (total + shipping + Number(tax));

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <Card>
            <div className="text-center">
                <h2 className="text-info font-weight-bold mt-3"> Order Summary </h2>
                <h5 className="font-weight-bold text-muted">Items Order : {cart.length} </h5>
                <hr className="bg-secondary py-1" />
            </div>
            <Table striped hover className="text-muted font-weight-bold">
                <thead>
                    <tr>
                        <th>Items Price</th>
                        <th>${formatNumber(total)}</th>
                    </tr>
                    <tr>
                        <th>Shipping:</th>
                        <th>${formatNumber(shipping)}</th>
                    </tr>
                    <tr>
                        <th>Estimated Tax:</th>
                        <th>${formatNumber(tax)}</th>
                    </tr>
                    <tr className="text-danger font-weight-bolder">
                        <th>Order Total:</th>
                        <th>${formatNumber(grandTotal)}</th>
                    </tr>
                </thead>
            </Table>

            <Button className="btn w-100" variant="secondary" size="lg"> Review your order </Button>



        </Card>
    );
};

export default Cart;
import React from 'react';
import Cart from './cart/cart';
import './CartPage.css';

function CartPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col-sm-12 cart-section">
                        <div className="row">
                            <div className="col-sm-12 cart-div">
                                <Cart />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default CartPage;
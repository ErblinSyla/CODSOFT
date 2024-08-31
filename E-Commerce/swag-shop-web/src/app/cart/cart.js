import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './cart.css';
import CartService from '../../services/cart-service';
import NotificationService, { NOTIF_WISHLIST_CHANGED } from '../../services/notification-service';
import ProductCondensedCart from '../../product-condensed/product-condensed-cart';

let ns = new NotificationService();
let cs = new CartService();

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = { cart: cs.getCart() };

        this.createCart = this.createCart.bind(this);
        this.onCartChanged = this.onCartChanged.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onCartChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onCartChanged(newCart) {
        this.setState({ cart: newCart });
    }

    createCart() {
        return this.state.cart.map((product) =>
            <ProductCondensedCart product={product} key={product._id} />
        );
    }

    calculateTotalPrice() {
        return this.state.cart.reduce((total, product) => total + product.price, 0);
    }

    renderCheckoutButton() {
        if (this.state.cart.length > 0) {
            const totalPrice = this.calculateTotalPrice();
            return (
                <Link className='checkout' to="/checkout" state={{ cart: this.state.cart, totalPrice: totalPrice }}>
                    <button className="btn btn-primary mt-3">Checkout</button>
                </Link>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="card cart-card">
                <div className="card-block">
                    <h4 className="card-title">Cart</h4>
                    <ul className="list-group">
                        {this.createCart()}
                    </ul>
                </div>
                {this.renderCheckoutButton()}
            </div>
        );
    }
}

export default Cart;

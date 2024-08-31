import React, { Component } from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';
import CartService from '../services/cart-service';
import NotificationService, { NOTIF_CART_CHANGED } from '../services/notification-service';

let ds = new DataService();
let cs = new CartService();
let ns = new NotificationService();

class ProductCondensed extends Component {
    
    constructor(props) {
        super(props);
        
        // Bind
        this.removeProduct = this.removeProduct.bind(this);
        this.onCartButtonClicked = this.onCartButtonClicked.bind(this);
        this.onCartChanged = this.onCartChanged.bind(this);
        
        this.state = {
            inCart: cs.itemOnCart(props.product),
        };
    }
    
    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_CART_CHANGED, this, this.onCartChanged);
    }
    
    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_CART_CHANGED);
    }

    onCartChanged(newCart) {
        this.setState({ inCart: cs.itemOnCart(this.props.product) });
    }

    onCartButtonClicked() {
        if (this.state.inCart) {
            cs.removeCartItem(this.props.product);
        } else {
            cs.addCartItem(this.props.product);
        }
        this.setState({ inCart: !this.state.inCart });
    }
    
    render() {
        const btnClassCart = this.state.inCart ? "btn btn-warning" : "btn btn-success";
        const btnTextCart = this.state.inCart ? "Remove From Cart" : "Add To Cart";
        return (
            <li className="list-group-item pc-condensed">
                <a className="btn btn-outline-danger x-btn" onClick={this.removeProduct}>X</a>
                <a href="#" onClick={this.onCartButtonClicked} className={btnClassCart}>{btnTextCart}</a>
                <img className="wishlist-img" src={this.props.product.imgUrl} alt={this.props.product.title}></img>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ProductCondensed;

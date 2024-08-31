import React, { Component } from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';
import CartService from '../services/cart-service';

let ds = new DataService();
let cs = new CartService();

class ProductCondensedCart extends Component {
    
    constructor(props) {
        super(props);
        
        //Bind
        this.removeProduct = this.removeProduct.bind(this);
    }
    
    removeProduct = () => {
        cs.removeCartItem(this.props.product);
    }
    
    render() {
        return (
            <li className="list-group-item pc-condensed">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
                <img className="wishlist-img" src={this.props.product.imgUrl}></img>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ProductCondensedCart;
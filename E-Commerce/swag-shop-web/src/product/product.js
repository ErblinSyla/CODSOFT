import React, { Component } from 'react';
import './product.css';
import DataService from '../services/data-service';
import CartService from '../services/cart-service';
import NotificationService, { NOTIF_WISHLIST_CHANGED, NOTIF_CART_CHANGED } from '../services/notification-service';

let ds = new DataService();
let cs = new CartService();
let ns = new NotificationService();

class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            onWishList: ds.itemOnWishList(props.product),
            inCart: cs.itemOnCart(props.product)
        };
        
        // Bind Functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onCartButtonClicked = this.onCartButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
        this.onCartChanged = this.onCartChanged.bind(this);
    }
    
    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
        ns.addObserver(NOTIF_CART_CHANGED, this, this.onCartChanged);
    }
    
    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
        ns.removeObserver(this, NOTIF_CART_CHANGED);
    }
    
    onWishListChanged(newWishList) {
        this.setState({ onWishList: ds.itemOnWishList(this.props.product) });
    }

    onCartChanged(newCart) {
        this.setState({ inCart: cs.itemOnCart(this.props.product) });
    }
    
    onButtonClicked() {
        if (this.state.onWishList) {
            ds.removeWishListItem(this.props.product);
        } else {
            ds.addWishListItem(this.props.product);
        }
        this.setState({ onWishList: !this.state.onWishList });
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
        const btnClassWishList = this.state.onWishList ? "btn btn-danger" : "btn btn-primary";
        const btnTextWishList = this.state.onWishList ? "Remove From Wishlist" : "Add To Wishlist";
        
        const btnClassCart = this.state.inCart ? "btn btn-warning" : "btn btn-success";
        const btnTextCart = this.state.inCart ? "Remove From Cart" : "Add To Cart";
        
        return (
            <div className="card product">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product" />
                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">Price: ${this.props.product.price}</p>
                    <a href="#" onClick={this.onButtonClicked} className={btnClassWishList}>{btnTextWishList}</a>
                    <a href="#" onClick={this.onCartButtonClicked} className={btnClassCart}>{btnTextCart}</a>
                </div>
            </div>
        );
    }
}

export default Product;

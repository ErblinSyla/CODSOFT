import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CartPng from './img/shopping-cart.png';
import HeartPng from './img/heart.png';

// Pages
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import ContactPage from './ContactPage';
import WishListPage from './WishListPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

// Components
import Product from '../product/product';

// Services
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            searchTerm: "",
            selectedCategory: "All Products",
            showModal: false,
            selectedProduct: null,
            products: [], 
            wishList: []
        };
        
        // ES6 Bind Functions
        this.loadData = this.loadData.bind(this);
        this.productList = this.productList.bind(this);
        
        this.loadData();
    }

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category });
    };

    handleViewProduct = (product) => {
        this.setState({
          selectedProduct: product,
          showModal: true,
        });
    };
    
    handleCloseModal = () => {
        this.setState({
          showModal: false,
          selectedProduct: null,
        });
    };
    
    loadData = () => {
        http.getProducts().then(data => {
            this.setState({ products: data });
        }).catch(err => {
            console.error("Failed to load products:", err);
        });
    }
    
    productList = () => {
        const { products, searchTerm, selectedCategory } = this.state;

        let filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedCategory !== "All Products") {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === selectedCategory
            );
        }

        return filteredProducts.map((product) =>
            <div className="product-item" key={product._id}>
                <Product product={product} />
                <button className="view-btn btn btn-danger" onClick={() => this.handleViewProduct(product)}>View Product</button>
            </div>
        );
    }
    
    render() {
        const { products, showModal, selectedProduct, searchTerm, selectedCategory } = this.state;

        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <h1>TechSphere</h1>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <Link to="/wishlist" className="nav-link wishlist"><img src={HeartPng} alt="Wishlist" /></Link>
                                <Link to="/cart" className="nav-link cart"><img src={CartPng} alt="Cart" /></Link>
                                <input 
                                    className="form-control mr-sm-2" 
                                    type="search" 
                                    placeholder="Search" 
                                    aria-label="Search"
                                    value={searchTerm} 
                                    onChange={this.handleSearchChange}
                                />
                            </form>
                        </div>
                    </nav>

                    {searchTerm && (
                        <div className="overlay">
                            <div className="overlay-content">
                                {this.productList().length > 0 ? (
                                    this.productList()
                                ) : (
                                    <p>No products found.</p>
                                )}
                            </div>
                        </div>
                    )}

                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h2>{selectedProduct.title}</h2>
                                <p className="prod-price"><b>Price:</b> ${selectedProduct.price}</p>
                                <img src={selectedProduct.imgUrl} alt={selectedProduct.title} />
                                <p><b>Description:</b> {selectedProduct.description}</p>
                                <button onClick={this.handleCloseModal}>Close</button>
                            </div>
                        </div>
                    )}
                    
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/product" element={
                            <ProductPage 
                                productList={this.productList} 
                                selectedCategory={selectedCategory}
                                onCategoryChange={this.handleCategoryChange}
                            />} 
                        />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/wishlist" element={<WishListPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                    </Routes>
                    <footer className="footer">
                        <h6><i>&copy; 2024 TechSphere. All Rights Reserved</i></h6>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;

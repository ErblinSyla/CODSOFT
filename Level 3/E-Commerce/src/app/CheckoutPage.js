import React from 'react';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const location = useLocation();
    const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };

    return (
        <div className="container-fluid payment-section">
            <div className="row">
                <div className="col-md-12 payment-list">
                    <h2>Checkout</h2>
                    <ul className="list-group">
                        {cart.map(product => (
                            <li className="list-group-item" key={product._id}>
                                <img src={product.imgUrl} alt={product.title} style={{ width: '50px', marginRight: '10px' }} />
                                {product.title} - ${product.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ${totalPrice}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 payment-form">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="inputEmail4">Full Name</label>
                            <input required type="text" className="form-control" id="inputEmail4" placeholder="Enter your full name"></input>
                            </div>
                            <div className="form-group col-md-6">
                            <label for="inputPassword4">Email</label>
                            <input required type="email" className="form-control" id="inputPassword4" placeholder="Enter your email"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input required type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2 &#40;Optional&#41;</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input required type="text" className="form-control" id="inputCity"></input>
                            </div>
                            <div className="form-group col-md-4">
                            <label for="inputState">Country</label>
                            <select required id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>Kosovo</option>
                                <option>United States</option>
                                <option>Other</option>
                            </select>
                            </div>
                            <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input required type="text" className="form-control" id="inputZip"></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Check Out</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;

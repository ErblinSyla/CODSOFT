import React from 'react';
import WishList from '../wishlist/wishlist';
import './WishListPage.css';

function WishListPage () {

    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col-sm-12 wishlist-section">
                        <div className="row">
                            <div className="col-sm-12 wishlist-div">
                                <WishList />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
   
}

export default WishListPage;
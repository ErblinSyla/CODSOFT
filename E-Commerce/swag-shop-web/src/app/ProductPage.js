import React from 'react';
import './ProductPage.css';
import CategoryFilter from './CategoryFilter';

function ProductPage({ productList, selectedCategory, onCategoryChange }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 product-section">
                    <div className="row">
                        <div className="col-sm-12 product-category">
                            <h4>Filter by category:</h4>
                            <CategoryFilter 
                            selectedCategory={selectedCategory}
                            onCategoryChange={onCategoryChange}
                            />
                        </div>
                    </div>
                    <div className="row product-row">
                        {productList()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;

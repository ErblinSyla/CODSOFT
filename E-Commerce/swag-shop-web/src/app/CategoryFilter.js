import React from 'react';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
    const categories = ['All Products', 'Laptop', 'Computer', 'TV', 'Keyboard', 'Mouse', 'Headset', 'Monitor']; // Add your categories here

    return (
        <div className="category-filter">
            <select 
                value={selectedCategory} 
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;

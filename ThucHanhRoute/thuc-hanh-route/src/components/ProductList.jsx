import React from 'react'

function ProductList() {
    const products = ['Sản phẩm A', 'Sản phẩm B', 'Sản phẩm C'];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList
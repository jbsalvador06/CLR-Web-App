import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductList({ category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/products');
            setProducts(response.data);
        } catch (error) {
            console.log('Error fetching products: ', error);
        }
    }

    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <div className="container">
            {filteredProducts.map((product) => (
                <div key={product._id}>
                    <h2>{product.prodName}</h2>
                    <img src={product.img} />
                    <p>{product.category}</p>
                    <p>{product.specs?.weight ? product.specs.weight : ("")}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };

  return (
    <div className='container'>
      {products.map((product) => (
        <div className='card'>
          <div key={product.id}>
            <h2>{product.prodName}</h2>
            <img src={product.img} />
            <p>{product.category}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
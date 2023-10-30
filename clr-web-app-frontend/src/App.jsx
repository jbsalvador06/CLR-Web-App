import './App.css'
import ProductList from './hooks/ProductList'

function App() {
  const categories = ['PPE', 'Welding Machine', 'Power Tools'];

  return (
    <>
      {categories.map((category) => (
        <ProductList key={category} category={category}/>
      ))}
    </>
  )
}

export default App
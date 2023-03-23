import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Product, Product2 } from "./components/partials/Product";

function App() {

  const [productsData, setProductsData] = useState();


  return (
    <div>
      <div>
        <button onClick={getProductsData1}>Ikke i bruk - boffevoff</button>
      </div>
      <div>
        <button onClick={getProductsData2}>Get product - vis</button>
        {renderProducts(productsData)}
      </div>
    </div>

  );

  function getProductsData1() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => { console.log(json) });
  }
  
  async function getProductsData2() {
    const respons = await fetch("https://dummyjson.com/products");
    const json = await respons.json();
    setProductsData(json);
    console.log(json);
  }
  
  function renderProducts(productsData) {
    return (
      productsData?.products?.length && productsData.products.map((product) => {
        return (
          <div>
          <Product key={product.id} product={product} />
//          <Product2 key={product.id} product={product} />
          </div>
      
/*          <div key={product.id}>
          <div><h2>{product.brand} - {product.title}</h2>
          {product.description}</div>
          </div>
*/
        )
      })
    );
  }

}



export default App;

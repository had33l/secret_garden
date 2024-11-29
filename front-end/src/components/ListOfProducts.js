import React , { useContext }from 'react';
import CardItem from './CardItem';
import "bootstrap/dist/css/bootstrap.min.css";




export default function ListOfProducts({
    products,
    handleIncrement,
    handleDecrement,
    handleSumDecrement,
    handleSumIncrement,
    sum,
  } ) {


 

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div className="card-containing">

      

        {products.map((elt)=>(
          <CardItem
          key={elt.id}
          elt={elt}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleSumDecrement={handleSumDecrement}
          handleSumIncrement={handleSumIncrement}
          sum={sum}
        
        
        />
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        {
          products.length !== 0 ? ( 
          <h1> Total: {sum} $ {'\u2728'}</h1>
        ):(
          <h1> you have no products for now {'\u2728'} </h1>
          )
        }
      </div>
    </div>
  )
}


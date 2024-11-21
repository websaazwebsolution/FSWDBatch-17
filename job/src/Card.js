import React from 'react';

function Card({ products }) { // Destructure props to access products
  return (
    <div className="container">
      <div className="row justify-content-center">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                style={{width:"100px"}}
                src={product.image} // Remove quotes from {product.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price}</p>
                {/* <p className="card-text">{product.description}</p> */}
                <p className="card-text">{product.rating.rate} ({product.rating.count} reviews)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

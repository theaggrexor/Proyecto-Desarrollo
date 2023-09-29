import React from 'react';

const productos = [
  { id: 1, name: 'Producto 1', price: 10, image: 'product1.jpg' },
  { id: 2, name: 'Producto 2', price: 15, image: 'product2.jpg' },
  // Agrega más productos aquí
];

function Productos({ addToCart }) {
  return (
    <div>
      <h2>Productos</h2>
      <div className="row">
        {productos.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Productos, productos };


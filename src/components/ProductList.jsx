import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  const onChange = (id, checked) => {
    products.map(product => product.id === id && (product.active = checked));
    setProducts(products);
    localStorage.setItem("products", JSON.stringify(products));
  };

  const onDelete = id => {
    const productList = JSON.parse(localStorage.getItem("products"));
    const updatedList = productList.filter(product => product.id !== id);
    setProducts(updatedList);
    localStorage.setItem("products", JSON.stringify(updatedList));
  };

  return (
    <>
      <h1>Product List</h1>
      <Link className="btn btn-primary shadow-sm mb-3" to="/products/create">
        Create New Product
      </Link>
      {products ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>EAN</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr
                key={product.id}
                className={product.quantity === "0" ? "out-of-product" : null}
              >
                <td>{product.name}</td>
                <td>{product.EAN}</td>
                <td>{product.type}</td>
                <td>{product.weight}</td>
                <td>{product.color}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="active"
                      defaultChecked={product.active}
                      onChange={e => onChange(product.id, e.target.checked)}
                    />
                  </div>
                </td>
                <td>
                  <Link
                    className="btn btn-secondary shadow-sm mr-1 mb-1"
                    to={`/products/${product.id}`}
                  >
                    VIEW
                  </Link>
                  <Link
                    className="btn btn-primary shadow-sm mr-1 mb-1"
                    to={`/products/${product.id}/edit`}
                  >
                    EDIT
                  </Link>
                  <button
                    className="btn btn-danger shadow-sm mb-1"
                    onClick={() => onDelete(product.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>There are no products to show</p>
      )}
    </>
  );
};

export default ProductList;

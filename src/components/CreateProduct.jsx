import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const CreateProduct = () => {
  const [toProduct, setToProduct] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products") || "[]");

    const newProduct = {
      id: Math.floor(Math.random() * Math.floor(100000)),
      name: e.target.name.value,
      EAN: e.target.EAN.value,
      type: e.target.type.value,
      weight: e.target.weight.value,
      color: e.target.color.value,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
      active: e.target.active.checked
    };

    products.unshift(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    setToProduct(true);
  };

  return (
    <>
      {toProduct ? <Redirect to="/products" /> : null}
      <h1>Create a product</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="ean">EAN</label>
          <input type="text" className="form-control" name="EAN" />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input type="text" className="form-control" name="type" />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            className="form-control"
            name="weight"
            step="0.01"
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input type="text" className="form-control" name="color" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" className="form-control" name="quantity" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            step="0.01"
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" name="active" />
          <label className="form-check-label" htmlFor="active">
            Active
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link to="/products" className="btn btn-secondary ml-1">
          Back to Product List
        </Link>
      </form>
    </>
  );
};

export default CreateProduct;

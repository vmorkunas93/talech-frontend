import React, { useState, useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [toProduct, setToProduct] = useState(false);
  const [input, setInput] = useState({
    name: "",
    EAN: "",
    type: "",
    weight: "",
    color: "",
    quantity: "",
    price: "",
    active: ""
  });

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("products"));
    const oneProduct = productList.filter(product => product.id === Number(id));
    setInput(oneProduct[0]);
  }, [id]);

  const onSubmit = e => {
    e.preventDefault();
    const productList = JSON.parse(localStorage.getItem("products"));
    const products = productList.filter(product => product.id !== Number(id));

    const editedProduct = {
      id,
      ...input
    };

    const editedProductList = [editedProduct, ...products];
    localStorage.setItem("products", JSON.stringify(editedProductList));
    setToProduct(true);
  };

  const onChange = e => {
    if (e.currentTarget.type === "checkbox") {
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.checked
      });
    } else
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
      });
  };

  return (
    <>
      {toProduct ? <Redirect to="/products" /> : null}
      <h1>Edit a product</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={input.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ean">EAN</label>
          <input
            type="text"
            className="form-control"
            name="EAN"
            value={input.EAN}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            className="form-control"
            name="type"
            value={input.type}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            className="form-control"
            name="weight"
            value={input.weight}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={input.color}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={input.quantity}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={input.price}
            onChange={onChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="active"
            checked={input.active}
            onChange={onChange}
          />
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

export default EditProduct;

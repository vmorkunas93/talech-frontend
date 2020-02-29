import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("products"));
    const product = productList.filter(product => product.id === Number(id));
    setProduct(product[0]);
  }, [id]);

  return (
    <>
      <h1>Product Preview</h1>
      <Link className="btn btn-primary mr-1 mb-3" to={`/products/${id}/edit`}>
        Edit product
      </Link>
      <Link to="/products" className="btn btn-secondary mb-3">
        Back to Product List
      </Link>
      <nav>
        <div className="nav nav-tabs">
          <a
            className={
              activeTab === 1 ? "nav-item nav-link active" : "nav-item nav-link"
            }
            href="#product-details"
            onClick={() => setActiveTab(1)}
          >
            Product Details
          </a>
          <a
            className={
              activeTab === 2 ? "nav-item nav-link active" : "nav-item nav-link"
            }
            href="#price-history"
            onClick={() => setActiveTab(2)}
          >
            Price History
          </a>
          <a
            className={
              activeTab === 3 ? "nav-item nav-link active" : "nav-item nav-link"
            }
            href="#quantity-history"
            onClick={() => setActiveTab(3)}
          >
            Quantity History
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={activeTab === 1 ? "tab-pane show active" : "tab-pane"}
          id="product-details"
        >
          <h1 className="my-3">{product.name}</h1>
          <p>EAN: {product.EAN}</p>
          <p>Type: {product.type}</p>
          <p>Weight: {product.weight}</p>
          <p>Color: {product.color}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="active"
              defaultChecked={product.active}
              disabled
            />
            <label className="form-check-label" htmlFor="active">
              Active
            </label>
          </div>
        </div>
        <div
          className={activeTab === 2 ? "tab-pane show active" : "tab-pane"}
          id="price-history"
        >
          Price History
        </div>
        <div
          className={activeTab === 3 ? "tab-pane show active" : "tab-pane"}
          id="quantity-history"
        >
          Quantity History
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

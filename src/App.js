import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import SingleProduct from "./components/SingleProduct";
import EditProduct from "./components/EditProduct";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/products/create">
            <CreateProduct />
          </Route>
          <Route exact path="/products/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/products/:id/edit">
            <EditProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

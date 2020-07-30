import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar/>
        <Switch>
          <Route exact path="/create" component={ProductCreate} />
          <Route exact path="/create/:id" name="id" component={ProductCreate} />
          <Route exact path="/" component={ProductList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

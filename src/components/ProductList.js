import React, { Component } from "react";
import ProductService from "../services/ProductService";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      message: null,
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    ProductService.getAllProducts()
      .then((response) => {
        //console.log("HI");
        console.log(response);
        this.setState({
          products: response.data,
        });
      })
      .catch((res) => {
        console.log("He" + res);
      });
  }

  handleDelete(id) {
    ProductService.deleteOneProduct(id).then((response) => {
      console.log(response);
      this.setState({
        message: response.data,
      });
      this.loadProducts();
    });
  }
  handleEdit(id) {
      this.props.history.push(`/create/${id}`);
  }

  render() {
    return (
      <React.Fragment>
        <h2>ProductList App</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>CODE</th>
              <th>COST</th>
              <th>DISCOUNT</th>
              <th>GST</th>
              <th>OPERATION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.prodId}>
                <td>{product.prodId}</td>
                <td>{product.prodCode}</td>
                <td>{product.prodCost}</td>
                <td>{product.prodDiscount}</td>
                <td>{product.prodGst}</td>
                <td>
                  <button className="btn btn-warning m-2" onClick={() => this.handleDelete(product.prodId)}>
                    DELETE
                  </button>
                  <button className="btn btn-info" onClick={() => this.handleEdit(product.prodId)}>
                    EDIT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.message && <div className="alert alert-danger">{this.state.message}</div>}
      </React.Fragment>
    );
  }
}

export default ProductList;

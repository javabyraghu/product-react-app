import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import ProductService from "../services/ProductService";

class ProductCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodId: this.props.match.params.id,
      prodCode: "",
      prodCost: "",
      prodDiscount: "",
      prodGst: "",
      message: "",
    };
  }

  componentDidMount() {
    if (this.state.prodId !== undefined) {
      ProductService.getOneProduct(this.state.prodId).then((response) =>
        this.setState({
          prodId: response.data.prodId,
          prodCode: response.data.prodCode,
          prodCost: response.data.prodCost,
          prodDiscount: response.data.prodDiscount,
          prodGst: response.data.prodGst,
        })
      );
    }
  }

  onSubmit = (values,{resetForm}) => {
    if (this.state.prodId !== undefined) {
      ProductService.updateProduct(values).then((response) => {
        this.props.history.push(`/`);
      });
    } else {
      ProductService.saveProduct(values).then((response) => {
        this.setState({
          message: response.data,
        });
      });
    }
    resetForm({values:''});
  };

  render() {
    let { prodId, prodCode, prodCost, prodDiscount, prodGst } = this.state;
    return (
      <React.Fragment>
        <h3>WELCOME TO CREATE PRODUCT FORM</h3>
        <Formik
          initialValues={{ prodId, prodCode, prodCost, prodDiscount, prodGst }}
          onSubmit={this.onSubmit}
          enableReinitialize={true}
        >
          {(props) => (
            <Form>
              {this.state.prodId && (
                <div className="row">
                  <div className="col-3">
                    <label>Product Id</label>
                  </div>
                  <div className="col-4">
                    <Field
                      type="text"
                      name="prodId"
                      className="form-control"
                      readOnly
                    />
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col-3">
                  <label>Product Code</label>
                </div>
                <div className="col-4">
                  <Field type="text" name="prodCode" className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <label>Product Cost</label>
                </div>
                <div className="col-4">
                  <Field type="text" name="prodCost" className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <label>Product Discount</label>
                </div>
                <div className="col-4">
                  <Field
                    type="text"
                    name="prodDiscount"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <label>Product Gst</label>
                </div>
                <div className="col-4">
                  <Field type="text" name="prodGst" className="form-control" />
                </div>
              </div>

              <button className="btn btn-success" type="submit">
                {this.state.prodId === undefined ? "Save" : "Update"}
              </button>
            </Form>
          )}
        </Formik>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
      </React.Fragment>
    );
  }
}

export default ProductCreate;

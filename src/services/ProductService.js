import axios from "axios";

const basePath = "http://localhost:9966/product-curd-app/rest/product";

class ProductService {
  getAllProducts() {
    return axios.get(`${basePath}/all`);
  }

  deleteOneProduct(id) {
    return axios.delete(`${basePath}/remove/${id}`);
  }

  saveProduct(product) {
    return axios.post(`${basePath}/save`, product);
  }

  updateProduct(product) {
    return axios.put(`${basePath}/modify`, product);
  }

  getOneProduct(id) {
    return axios.get(`${basePath}/one/${id}`);
  }
}

export default new ProductService();

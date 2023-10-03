import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import { Component, useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateProduct() {
  const [products, setProducts] = useState([
    { id: "1", productName: "Product 1", productCategory: "Food", productFreshness: "Brand New", productPrice: "10000" },
    { id: "2", productName: "Product 2", productCategory: "Drink", productFreshness: "Second Hank", productPrice: "20000" },
  ]);
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const addProduct = () => {
    const productId = uuidv4();
    const isDuplicate = products.some((product) => product.id === productId);
    if (!isDuplicate) {
      const newProduct = {
        id: productId,
        productName,
        productCategory,
        productFreshness,
        productPrice,
      };
      setProducts([...products, newProduct]);

      // Reset nilai input
      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
    } else {
      alert("Nomor produk sudah ada. Silakan coba lagi.");
    }
  };

  const options = [
    { label: "Food", value: "Food" },
    { label: "Drink", value: "Drink" },
  ];

  const handleDelete = (productId) => {
    const shouldDelete = window.confirm("Apakah Anda yakin ingin menghapus produk ini?");
    if (shouldDelete) {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <Text />
      <Link to="/">
        <button>Landing Page</button>
      </Link>
      <h1>Create Product</h1>
      <h3>Detail Product</h3>
      <label htmlFor="productName">Product Name :</label> <br />
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} /> <br />
      <label htmlFor="productCategory">Product Category : </label> <br />
      <select onChange={(e) => setProductCategory(e.target.value)} name="productCategory">
        <br />
        <option type="radio" name="productCategory" disabled selected>
          Choose....
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <br />
      <label htmlFor="name">Product Freshness</label> <br />
      <input type="radio" name="product" value="Brand New" onChange={(e) => setProductFreshness(e.target.value)} />
      <label htmlFor="brand">Brand New</label> <br />
      <input type="radio" name="product" value="Second Hank" onChange={(e) => setProductFreshness(e.target.value)} />
      <label htmlFor="second">Second Hank</label> <br />
      <input type="radio" name="product" value="Refurbished" onChange={(e) => setProductFreshness(e.target.value)} />
      <label htmlFor="refurbished">Refurbished</label> <br />
      <label htmlFor="myFile">Image of Product </label>
      <input type="file" accept="image/*" id="myFile" name="myFile" /> <br />
      <label htmlFor="description">Additional Description </label>
      <br />
      <textarea name="description" id="description" cols="36" rows="10" defaultValue={""}></textarea>
      <br />
      <label>Product Price : </label> <br />
      <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
      <br />
      <button onClick={addProduct}>Submit</button>
      <br /> <br />
      <h2>Table List Product</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr onClick={() => navigate(`/${product.id}`)} key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateProduct;

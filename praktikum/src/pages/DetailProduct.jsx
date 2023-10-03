import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function DetailProduct() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail Product</h2>
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
          <tr>
            <td>{id}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to="/CreateProduct">
                <button>Create Product</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailProduct;

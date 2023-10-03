import React, { useState } from "react";

function TextBox() {
  const [productName, setProductName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleProductNameChange = (e) => {
    const inputValue = e.target.value;
    setProductName(inputValue);

    if (inputValue.length > 10) {
      setErrorMessage("Product Name tidak boleh melebihi 10 karakter");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <label htmlFor="product-name">Product Name : </label>
      <br />
      <input type="text" id="product-name" value={productName} onChange={handleProductNameChange} />
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}

export default TextBox;

import React from "react";

class Button extends React.Component {
  generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100); // Ubah angka 100 sesuai keinginan Anda
    console.log("Angka acak:", randomNumber);
  };

  render() {
    return (
      <div>
        <button onClick={this.generateRandomNumber}>Submit</button>
      </div>
    );
  }
}

export default Button;

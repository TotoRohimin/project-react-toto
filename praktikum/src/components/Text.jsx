import React, { useState } from "react";

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

function Text() {
  const [language, setLanguage] = useState("en"); // Bahasa Inggris sebagai default

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <div>
      <button onClick={toggleLanguage}>Toggle Language</button>
      <h1>{article.title[language]}</h1>
      <p>{article.description[language]}</p>
    </div>
  );
}

export default Text;

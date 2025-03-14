import React, { useState, useEffect } from "react";

function App() {

  const [recentViewed, setRecentViewed] = useState(() => {
    const saved = localStorage.getItem("recentViewed");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("recentViewed", JSON.stringify(recentViewed));
  }, [recentViewed]);


  const addProduct = (product) => {
    setRecentViewed((e) => {
      const newList = e.filter((item) => item !== product);
      return [product, ...newList];
    });
  };

  return (
    <div>
      <h1>🛒 Өнімдер</h1>
      <button onClick={() => addProduct("📱 Телефон")}>📱 Телефон</button>
      <button onClick={() => addProduct("💻 Ноутбук")}>💻 Ноутбук</button>
      <button onClick={() => addProduct("🎧 Құлаққап")}>🎧 Құлаққап</button>
      <button onClick={() => addProduct("⌚ Сағат")}>⌚ Сағат</button>
      <button onClick={() => addProduct("📷 Камера")}>📷 Камера</button>

      <h2>Соңғы қаралғандар:</h2>
      <ul>
        {recentViewed.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



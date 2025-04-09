
import React from 'react'
import LanguageProvider from './components/LanguageProvider';
import Test from './components/Test';


function App() {
  return (
    <LanguageProvider>
      <div style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "30px"
      }}>
        <h1 style={{ fontSize: "28px" }}>👓 HomeWork useContext</h1>
        <Test />
        <footer style={{ marginTop: "40px", fontSize: "12px", color: "#777" }}>
          Secret language selection app © 2025
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App




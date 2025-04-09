import React from 'react'
import Main from './Main';


export default function Test() {
    return (
        <div style={{
          border: "2px solid #8aa",
          padding: "25px",
          borderRadius: "15px",
          margin: "20px auto",
          maxWidth: "600px",
          textAlign: "center",
        }}>
          <h2 style={{ fontWeight: "bold" }}>This is Test component</h2>
          <Main />
        </div>
      );
}



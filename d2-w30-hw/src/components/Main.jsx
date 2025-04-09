import React, { useContext } from 'react'
import { LanguageContext } from './LanguageProvider';


export default function Main() {
    const { language, changeLanguage, t } = useContext(LanguageContext);

    return (
      <div style={{
        border: "2px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
      }}>
        <h3><strong>This is Main component 🧑‍💻</strong></h3>
        <p style={{
          fontStyle: "italic",
          backgroundColor: "#e0e0e0",
          padding: "10px",
          borderRadius: "6px"
        }}>{t.title}</p>
  
        <select
          style={{
            marginTop: "15px",
            padding: "8px",
            borderRadius: "6px"
          }}
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="kz">Қазақша</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>
    );
}



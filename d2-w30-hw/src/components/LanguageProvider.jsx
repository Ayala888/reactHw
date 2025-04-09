import React, { useState, createContext, useContext } from "react";


export const LanguageContext = createContext();

const translations = {
  kz: {
    title: "Миссия түн ортасында басталады.",
    selectLabel: "Қазақша",
  },
  ru: {
    title: "Миссия начинается в полночь.",
    selectLabel: "Русский",
  },
  en: {
    title: "The mission starts at midnight.",
    selectLabel: "English",
  },
};


export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("kz");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}


export const useLanguage = () => useContext(LanguageContext);



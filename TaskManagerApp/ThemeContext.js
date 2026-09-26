import React, { createContext, useState } from "react";

// Tạo Context để chia sẻ theme cho toàn app
export const ThemeContext = createContext();

// Provider bọc quanh toàn bộ ứng dụng
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

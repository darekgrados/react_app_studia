import { useState } from "react";
import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const menuItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "Laboratorium 1" },
    { id: 3, label: "Laboratorium 2" },
  ];

  return (
    <RootLayout items={menuItems}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/laboratorium1" element={<Lab1 />} />
        <Route path="/laboratorium2" element={<Lab2 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;

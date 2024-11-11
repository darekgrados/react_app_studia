import Container from "react-bootstrap/Container";
import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

const RootLayout = ({ children }) => {
  const menuItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "Laboratorium 1" },
    { id: 3, label: "Laboratorium 2" },
    { id: 4, label: "Laboratorium 3" }
  ];

  return (
    <>
      <NavBarMenu items={menuItems} />
      <Container className="my-4">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default RootLayout;
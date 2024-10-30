import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBarMenu = ({ items }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {items.map((item) => (
              <Nav.Link key={item.id} href={`/${item.label.toLowerCase().replace(" ", "")}`}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// const NavBarMenu = ({ items }) => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {items.map((item) => (
//               <Nav.Link href={item.url} key={item.id}>
//                 {item.label}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

export default NavBarMenu;
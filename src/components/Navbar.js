import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLuggageCart } from "react-icons/fa";
import AuthUser from "../context/AuthUser";
import Cart from "../context/Cart";
const NavbarComp = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none">
            Basic Context
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-white text-decoration-none">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-white text-decoration-none">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/product" className="text-white text-decoration-none">
                Product
              </Link>
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-2">
            <span className="text-white">
              <AuthUser />
            </span>
            <div className="btn btn-warning d-flex justify-content-center align-items-center gap-2">
              <FaLuggageCart />
              <Cart />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

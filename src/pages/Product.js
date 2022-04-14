import React from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/Navbar";
import ProductComp from "../components/ProductComp/ProductComp";

const Product = () => {
  return (
    <div>
      <NavbarComp />
      <Container>
        <ProductComp />
      </Container>
    </div>
  );
};

export default Product;

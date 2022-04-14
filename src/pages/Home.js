import React from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <NavbarComp />
      <Container>
        <h1>Home Page</h1>
      </Container>
    </div>
  );
};

export default Home;

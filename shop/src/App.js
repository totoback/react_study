import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bgImg from "./assets/bg.png";
import data from "./data";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [shose, setShose] = useState(data);
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<div>상세페이지임</div>}/>
        <Route/>
      </Routes>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bgImg + ")" }}
      ></div>

      <div className="container">
        <div className="row">
          {shose.map((el, idx) => {
            return (
              <div className="col-md-4" key={idx}>
                <img src={shose[idx].img} width="60%" />
                <h4>{shose[idx].title}</h4>
                <span>{shose[idx].price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

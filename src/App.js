import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { DataProvider } from "./context/Data";
import Product from "./pages/Product";
function App() {
  return (
    <div>
      <DataProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;

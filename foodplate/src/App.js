import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Offers from "./Components/Offers";
import Other from "./Components/Other";
import Search from "./Components/Search";
import Help from "./Components/Help";
import Cart from "./Components/Cart";
import SignupLogin from "./Components/SignupLogin";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="">
        <Routes>
          <Route exact path="/" element={<Content/>}/>
          <Route exact path="/help" element={<Help/>}/>
          <Route exact path="/offers" element={<Offers/>}/>
          <Route exact path="/other" element={<Other/>}/>
          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/signuplogin" element={<SignupLogin/>}/>
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

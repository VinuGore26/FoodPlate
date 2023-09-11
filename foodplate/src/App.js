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

{/* 
      <Router>
      <Navbar title="TextUtils" aboutText={"About"} mode={mode} toggelMode={toggelMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TexUtils - Word counter, Character counter, Remove extra spaces" mode={mode} toggelMode={toggelMode}/>}/>
        <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </div>
    </Router> */}
    </>
  );
}

export default App;

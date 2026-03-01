import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./components/pages/home";
import Company from "./components/pages/company";
import LoginPage from "./login/page"
function App() {
   const [count, setCount] = useState(0);
useEffect(() => {
  console.log("Count changed");
}, [count]);
  return (
    <div className="App">
<BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/user/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

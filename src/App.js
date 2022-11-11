import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Home from "../src/components/Home"
import About from "../src/components/About/About"
import Login from "../src/components/Login/Login"
import Page404 from "../src/components/Page404"
import Discover from "../src/components/discovery/Discovery"
import Transaction from "./components/transaction/Transaction";
import Protect from "./components/protect/Protect";
import Res_protect from "./components/protect/Regis-protect"

function App() {
  const data =localStorage.getItem("email")
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Res_protect Component={Registration} />} />
          <Route path="/login" element={<Res_protect Component={Login} />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/transaction" element={<Protect Component={Transaction} />} />
          <Route path="/*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

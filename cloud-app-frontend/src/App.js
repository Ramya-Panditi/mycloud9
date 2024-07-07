import LandingPage from "./components/landing_page/landing_page";
import "./App.css";
import Footer from "./components/footer/footer";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Home from "./components/home/home";
import MyCloud from "./components/mycloud/mycloud";
import { HashRouter, Routes, Route } from "react-router-dom";
import Folder from "./components/Folder/folder";

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column app-container">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/mycloud/*" element={<MyCloud />} />
          {/* <Route exact path="/mycloud/*" element={<Folder />} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

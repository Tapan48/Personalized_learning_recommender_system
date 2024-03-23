import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/landing";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Footer from "./components/footer/footer";
import HomePage from "./pages/Home/home";
import EleventhGrade from "./pages/classes/11th/11th";
import TwelfthGrade from "./pages/classes/12th/12th";
import FeaturesComponent from "./pages/features/features";

import UseAuth from "./components/auth/userauth";
import ContactPage from "./pages/contact/contact";
import PricingPage from "./pages/pricing/pricing";
import PhysicsChapters11 from "./pages/chapters/11th/physics";
import ChemistryChapters11 from "./pages/chapters/11th/chemistry";
import MathematicsChapters11 from "./pages/chapters/11th/maths";
import MathematicsChapters12 from "./pages/chapters/12th/maths";
import PhysicsChapters12 from "./pages/chapters/12th/physics";
import ChemistryChapters12 from "./pages/chapters/12th/chemistry";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/11th/maths" element={<MathematicsChapters11 />} />
          <Route path="/11th" element={<EleventhGrade />} />
          <Route path="/12th" element={<TwelfthGrade />} />
          <Route path="/11th/physics" element={<PhysicsChapters11 />} />
          <Route path="/11th/chemistry" element={<ChemistryChapters11 />} />
          <Route path="/12th/maths" element={<MathematicsChapters12 />} />
          <Route path="/12th/physics" element={<PhysicsChapters12 />} />
          <Route path="/12th/chemistry" element={<ChemistryChapters12 />} />
          <Route path="/features" element={<FeaturesComponent />} />
          <Route path="/useauth" element={<UseAuth />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;

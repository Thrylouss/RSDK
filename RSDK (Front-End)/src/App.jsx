import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import ResponsibilityPage from "./pages/ResponsibilityPage.jsx";
import DrillingPage from "./pages/DrillingPage.jsx";
import MiningPage from "./pages/MiningPage.jsx";
import SalePage from "./pages/SalePage.jsx";

function App() {
    return (
        <HashRouter>
            <Header />
            <div id="wrapper">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sale" element={<SalePage />} />
                    <Route path="/career" element={<CareerPage />} />
                    <Route path="/mining" element={<MiningPage />} />
                    <Route path="/drilling" element={<DrillingPage />} />
                    <Route path="/responsibility" element={<ResponsibilityPage />} />
                </Routes>
            </div>
            <Footer />
        </HashRouter>
    );
}

export default App;

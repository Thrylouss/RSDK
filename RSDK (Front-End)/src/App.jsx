import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import Details from "./pages/Details.jsx";

function App() {

    return (
        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App

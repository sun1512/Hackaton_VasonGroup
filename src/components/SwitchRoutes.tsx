import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BiancaVinificazionePage from "../pages/BiancaVinificazionePage";
import EventiPage from "../pages/EventiPage";



function SwitchRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/vinificazione/bianca" element={<BiancaVinificazionePage />}/>
            <Route path="/eventi" element={<EventiPage />} />
        </Routes>
    )
}

export default SwitchRoutes;
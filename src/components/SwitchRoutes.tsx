import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BiancaVinificazionePage from "../pages/BiancaVinificazionePage";


function SwitchRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/vinificazione/bianca" element={<BiancaVinificazionePage />}/>
        </Routes>
    )
}

export default SwitchRoutes;
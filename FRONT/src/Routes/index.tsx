import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../Pages/Home";
export const RoutesMain = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    );
};

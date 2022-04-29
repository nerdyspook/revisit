import Home from "./pages/Home/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Auth/Login";
import Search from "./pages/Search/Search";
import { useState } from "react";
import Error from "./pages/Error/Error";
import Watch from "./pages/Watch/Watch";
import SignUp from "./pages/Auth/SignUp";

const Layout = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <Navbar setShowNav={setShowNav} />
            <div className="home__container">
                <Sidebar show={showNav} setShowNav={setShowNav} />
                <div className="home__main">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="watch" element={<Watch />} />
                </Route>
                <Route path="/auth" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};

export default App;

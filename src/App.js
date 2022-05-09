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
import LikedVideos from "./pages/Liked/LikedVideos";
import History from "./pages/History/History";
import Library from "./pages/Library/Library";
import WatchLater from "./pages/WatchLater/WatchLater";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const Layout = () => {
    const [showNav, setShowNav] = useState(true);

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
                    <Route path="watch/:videoId" element={<Watch />} />
                    <Route
                        path="liked"
                        element={
                            <RequireAuth>
                                <LikedVideos />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="history"
                        element={
                            <RequireAuth>
                                <History />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="library"
                        element={
                            <RequireAuth>
                                <Library />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="watch-later"
                        element={
                            <RequireAuth>
                                <WatchLater />
                            </RequireAuth>
                        }
                    />
                </Route>
                <Route path="/auth" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};

export default App;

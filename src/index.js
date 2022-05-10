import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import App from "./App";
import "./index.css";
import "./reset.scss";
import { AuthContextProvider } from "./context/AuthContext";
import { VideoContextProvider } from "./context/VideoContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <VideoContextProvider>
                    <App />
                </VideoContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

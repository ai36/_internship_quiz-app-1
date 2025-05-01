import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@assets/styles/style.css";
import { App } from "./App.jsx";

const pages = {
    welcome: "Welcome",
    quiz: "Quiz",
    results: "Results",
};

let page = pages.welcome;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App page={page} />
    </StrictMode>
);

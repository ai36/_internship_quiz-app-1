import { useState } from "react";
import { Header } from "@components/header/Header.jsx";
import { Card } from "@components/card/Card.jsx";
import { Footer } from "@components/footer/Footer.jsx";

const pages = {
    welcome: "Welcome",
    quiz: "Quiz",
    results: "Results",
};

const page = pages.welcome;

export function App() {
    const [currentPage, setCurrentPage] = useState(page);

    const handleWelcome = () => {
        setCurrentPage(pages.welcome);
    };

    const handleQuiz = () => {
        setCurrentPage(pages.quiz);
    };

    const handleResults = () => {
        setCurrentPage(pages.results);
    };

    return (
        <div className="content">
            <Header page={currentPage} onClose={handleWelcome} />
            <Card page={currentPage} onQuiz={handleQuiz} onWelcome={handleWelcome} onResults={handleResults} />
            <Footer />
        </div>
    );
}

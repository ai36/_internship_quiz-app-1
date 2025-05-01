import { useState } from "react";
import { Header } from "@components/header/Header.jsx";
import { Card } from "@components/card/Card.jsx";
import { Footer } from "@components/footer/Footer.jsx";

export function App({ page }) {
    const [currentPage, setCurrentPage] = useState(page);

    const handleWelcome = () => {
        setCurrentPage(`Welcome`);
    };

    const handleQuiz = () => {
        setCurrentPage(`Quiz`);
    };

    const handleResults = () => {
        setCurrentPage(`Results`);
    };

    return (
        <div className="content">
            <Header page={currentPage} onClose={handleWelcome} />
            <Card page={currentPage} onQuiz={handleQuiz} onWelcome={handleWelcome} onResults={handleResults} />
            <Footer />
        </div>
    );
}

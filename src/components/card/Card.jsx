import { Welcome } from "@pages/welcome/Welcome";
import { Quiz } from "@pages/quiz/Quiz";
import { Results } from "@pages/results/Results";
import data from "/src/api/mock/quizz_questions.json";

import { useState } from "react";

export function Card({ page, onWelcome, onQuiz, onResults }) {
    const [questionsCount, setQuestionsCount] = useState(data.questions.length >> 1); // для облегчения тестирования, в качестве количества вопросов по умолчанию здесь можно задать 1
    const [quizResults, setQuizResults] = useState({ wrong: 0, success: 0 });

    const handleResults = (results) => {
        setQuizResults(results);
        onResults();
    };

    const pages = {
        "Welcome" : <Welcome onQuiz={onQuiz} value={questionsCount} onChange={setQuestionsCount}/>,
        "Quiz": <Quiz questionsCount={questionsCount} onResults={handleResults} />,
        "Results": <Results results={quizResults} onWelcome={onWelcome} />
    }

    return pages[page];
}

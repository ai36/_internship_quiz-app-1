import { useMemo } from 'react';
import data from "/src/api/mock/quizz_questions.json";

export function useQuiz(questionsCount, correctlyAnsweredIds = []) {



    const questionsData = useMemo(() => {
        let dataQuestions = [...data.questions];
        let dataQuestionsLength = dataQuestions.length;
        const numberOfQuestions = questionsCount || dataQuestionsLength;

        while (dataQuestionsLength > numberOfQuestions) {
            let randomIndex = Math.floor(Math.random() * dataQuestionsLength);
            dataQuestions.splice(randomIndex, 1);
            dataQuestionsLength--;
        }
        return dataQuestions.sort(() => Math.random() - 0.5);
    }, [questionsCount]);
    



    const answers = useMemo(() => {
        const allCountries = [...data.countries];
        const shuffledAnswers = [];
    
        questionsData.forEach((questionObj) => {
            const countriesCopy = [...allCountries];
            const correctAnswer = questionObj.correctAnswer;
    
            correctlyAnsweredIds.forEach(id => {
                const index = countriesCopy.indexOf(id);
                if (index !== -1) countriesCopy.splice(index, 1);
            });
    
            const correctAnswerIndex = countriesCopy.indexOf(correctAnswer);
            if (correctAnswerIndex !== -1) {
                countriesCopy.splice(correctAnswerIndex, 1);
            }

            const otherVariants = [];
            for (let i = 0; i < 3; i++) {
                if (countriesCopy.length === 0) break;
                const randomIndex = Math.floor(Math.random() * countriesCopy.length);
                otherVariants.push(countriesCopy[randomIndex]);
                countriesCopy.splice(randomIndex, 1);
            }
    
            const allVariants = [...otherVariants, correctAnswer];
    
            shuffledAnswers.push({
                id: correctAnswer,
                variants: allVariants.sort(() => Math.random() - 0.5),
                correctAnswer: correctAnswer,
            });
        });
    
        return shuffledAnswers;
    }, [questionsData, correctlyAnsweredIds]);




    const questions = useMemo(() => {
        return questionsData.map((item) => ({
            id: item.correctAnswer,
            type: "picture",
            image: item.flag,
            imageWidth: "auto",
            imageHeight: 60,
            imageAlt: "Иллюстрация к вопросу",
            question: item.question,
            correctAnswer: item.correctAnswer,
        }));
    }, [questionsData]);
   



    return {
        questions,
        answers,
        totalQuestions: questions.length,
    };
}
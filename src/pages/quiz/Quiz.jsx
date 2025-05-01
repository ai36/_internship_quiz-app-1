import { Button } from "@components/button/Button";
import { Question } from "@components/question/Question";
import { Answer } from "@components/answer/Answer";
import stylesCard from "@components/card/card.module.css";
import styles from "./quiz.module.css";
import { useQuiz } from "@hooks/useQuiz";
import { useEffect, useState, useRef } from "react";

export function Quiz({ questionsCount, onResults }) {
  const [success, setSuccess] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctlyAnsweredIds, setCorrectlyAnsweredIds] = useState([]);
  const [currentAnswerVariants, setCurrentAnswerVariants] = useState([]);

  const selectedOptionRef = useRef(null);

  const { questions, answers } = useQuiz(questionsCount, correctlyAnsweredIds);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsCount - 1) {
      setIsAnswered(false);
      setSelectedOption(null);
      selectedOptionRef.current = null;
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswerVariants(answers[currentQuestionIndex + 1].variants);
    } else {
      onResults({ success, wrong });
    }
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    selectedOptionRef.current = value;
  };

  const handleCheckAnswer = () => {
    const answerToCheck = selectedOptionRef.current;
    if (answerToCheck === answers[currentQuestionIndex].correctAnswer) {
      setSuccess((prev) => prev + 1);
      setCorrectlyAnsweredIds((prev) => [...prev, questions[currentQuestionIndex].id]);
    } else {
      setWrong((prev) => prev + 1);
    }
    setIsAnswered(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && isAnswered && document.activeElement.id !== "logotype") {
        handleNextQuestion();
      }
      if (event.key === "Enter" && selectedOption && document.activeElement.id !== "logotype") {
        handleCheckAnswer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextQuestion, handleCheckAnswer, selectedOption, isAnswered]);

  useEffect(() => {
    if (answers[currentQuestionIndex]) {
      if (!isAnswered) {
        setCurrentAnswerVariants(answers[currentQuestionIndex].variants);
      }
    }
  }, [currentQuestionIndex, answers, isAnswered]);

  const buttonText = isAnswered ? (currentQuestionIndex < questionsCount - 1 ? "Дальше" : "Результат") : "Ответить";

  return (
    <main>
      <h1 className="visually-hidden">Quiz-викторина «Занимательная вексиллология»</h1>
      <section>
        <h2 className="visually-hidden">{`Вопрос № ${currentQuestionIndex + 1}`}</h2>
        <div className={`${stylesCard.card} ${styles.card}`}>
          <Question question={questions[currentQuestionIndex]} />
          <Answer
            answer={{
              ...answers[currentQuestionIndex],
              variants: currentAnswerVariants,
            }}
            onOptionChange={handleOptionChange}
            isAnswered={isAnswered}
            selectedOption={selectedOption}
            key={`answer-${currentQuestionIndex}`}
          />
          <div className={`${stylesCard.actionBox || ''} ${styles.actionBox}`}>
            <Button
              text={buttonText}
              onQuiz={isAnswered ? handleNextQuestion : handleCheckAnswer}
              currentQuestion={currentQuestionIndex}
              disabled={!selectedOption}
            />
            <span className={`${stylesCard.legend || ''} ${styles.legend}`}>
              {currentQuestionIndex + 1} / {questionsCount}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

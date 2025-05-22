import { Button } from "@components/button/Button";
import { Question } from "@components/question/Question";
import { Answer } from "@components/answer/Answer";
import stylesCard from "@components/card/card.module.css";
import styles from "./quiz.module.css";
import { useQuiz } from "@hooks/useQuiz";
import { useEffect, useState, useRef, useCallback } from "react";

const keyToIndex = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
};

export function Quiz({ questionsCount, onResults }) {
  const [success, setSuccess] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctlyAnsweredIds, setCorrectlyAnsweredIds] = useState([]);
  const [currentAnswerVariants, setCurrentAnswerVariants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [showAnswerResult, setShowAnswerResult] = useState(false);

  const selectedOptionRef = useRef(null);

  const { questions, answers } = useQuiz(questionsCount, correctlyAnsweredIds);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsCount - 1) {
      setIsAnswered(false);
      setSelectedOption(null);
      selectedOptionRef.current = null;
      setCorrectAnswer(null);
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

  const handleCheckAnswer = useCallback(() => {
    if (!selectedOptionRef.current) return;
    setIsLoading(true);
    setIsAnswered(true);
    setShowAnswerResult(false);
    setTimeout(() => {
      const answerToCheck = selectedOptionRef.current;
      const currentCorrectAnswer = answers[currentQuestionIndex].correctAnswer;
      setCorrectAnswer(currentCorrectAnswer);
      if (answerToCheck === currentCorrectAnswer) {
        setSuccess((prev) => prev + 1);
        setCorrectlyAnsweredIds((prev) => [...prev, questions[currentQuestionIndex].id]);
      } else {
        setWrong((prev) => prev + 1);
      }
      setSelectedOption(answerToCheck);
      setShowAnswerResult(true);
      setIsLoading(false);
    }, 1500);
  }, [currentQuestionIndex, answers, questions]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && isAnswered && document.activeElement.id !== "logotype") {
        handleNextQuestion();
      }
      if (event.key === "Enter" && selectedOptionRef.current && document.activeElement.id !== "logotype") {
        handleCheckAnswer();
      }
      const currentKeyIndex = keyToIndex[event.key];
      if (currentKeyIndex !== undefined && answers[currentQuestionIndex]?.variants?.[currentKeyIndex] && !isAnswered) {
        handleOptionChange(answers[currentQuestionIndex].variants[currentKeyIndex]);
      }
      if (event.key === "Backspace" && !isAnswered) {
        handleOptionChange(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextQuestion, handleCheckAnswer, isAnswered, currentQuestionIndex, answers, handleOptionChange, selectedOptionRef.current]);

  useEffect(() => {
    if (answers[currentQuestionIndex]) {
      if (!isAnswered) {
        setCurrentAnswerVariants(answers[currentQuestionIndex].variants);
        setCorrectAnswer(null);
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
            correctAnswer={showAnswerResult ? correctAnswer : null}
          />
          <div className={`${stylesCard.actionBox || ""} ${styles.actionBox}`}>
            <Button
              text={buttonText}
              onQuiz={isAnswered ? handleNextQuestion : handleCheckAnswer}
              currentQuestion={currentQuestionIndex}
              disabled={isLoading || !selectedOption}
              isLoading={isLoading}
            />
            <span className={`${stylesCard.legend || ""} ${styles.legend}`}>
              {currentQuestionIndex + 1} / {questionsCount}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

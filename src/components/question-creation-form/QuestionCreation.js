import React, { useEffect, useState } from "react";
import styles from "./QuestionCreation.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";

const QuestionCreation = ({ examId, id }) => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const { teacherID } = useParams();

  const addQuestion = (event) => {
    event.preventDefault();
    setQuestions([
      ...questions,
      {
        question: "",
        answers: [
          { option: "optionA", answer: "" },
          { option: "optionB", answer: "" },
        ],
        correctAnswer: "",
      },
    ]);
  };

  const addAnswer = (event, qIndex) => {
    event.preventDefault();
    setQuestions(
      questions.map((question, index) => {
        if (index !== qIndex) return question;
        return {
          ...question,
          answers: [
            ...question.answers,
            {
              option:
                "option" + String.fromCharCode(65 + question.answers.length),
              answer: "",
            },
          ],
        };
      })
    );
  };

  const handleQuestionChange = (qIndex, value) => {
    setQuestions(
      questions.map((question, index) => {
        if (index !== qIndex) return question;
        return { ...question, question: value };
      })
    );
  };

  const handleAnswerChange = (qIndex, aIndex, value) => {
    setQuestions(
      questions.map((question, index) => {
        if (index !== qIndex) return question;
        return {
          ...question,
          answers: question.answers.map((answer, ansIndex) => {
            if (ansIndex !== aIndex) return answer;
            return { ...answer, answer: value };
          }),
        };
      })
    );
  };

  const handleCorrectAnswerChange = (qIndex, value) => {
    setQuestions(
      questions.map((question, index) => {
        if (index !== qIndex) return question;
        return { ...question, correctAnswer: value };
      })
    );
  };

  // useEffect(() => {
  //   setRelatedExam(examId);
  // }, [examId]);

  const createQuestion = async (event, qIndex) => {
    event.preventDefault();
    const correctAnsw = questions[qIndex].answers.filter(
      (item) => item.answer === questions[qIndex].correctAnswer
    );

    console.log(correctAnsw[0].option);

    console.log("answer", questions[qIndex].answers);
    event.preventDefault();
    try {
      const token = localStorage.getItem("teacherToken");
      const response = await api.post(
        `http://localhost:2020/api/v1/questions/${examId}`,
        {
          question: questions[qIndex].question,
          exam: examId,
          optionA: questions[qIndex].answers[0].answer,
          optionB: questions[qIndex].answers[1].answer,
          optionC: questions[qIndex].answers[2]?.answer,
          optionD: questions[qIndex].answers[3]?.answer,
          correctAnswer: correctAnsw[0].option,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Question added successfully");
    } catch (error) {
      console.error("Failed to add qustion:", error);
    }
  };

  return (
    <div className={styles["question-creation-form"]}>
      {questions.map((question, qIndex) => (
        <form
          key={qIndex}
          className={styles["question-form-box"]}
          onSubmit={(event) => createQuestion(event, qIndex)}
        >
          <label>
            <input
              value={question.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              placeholder="Ask Qeusiton"
            />
          </label>
          <div className={styles["answers"]}>
            {question.answers.map((answer, aIndex) => (
              <label>
                <input
                  key={aIndex}
                  value={answer.answer}
                  onChange={(e) =>
                    handleAnswerChange(qIndex, aIndex, e.target.value)
                  }
                  placeholder="answer"
                />
              </label>
            ))}
          </div>

          {question.answers.length < 4 && (
            <button onClick={(event) => addAnswer(event, qIndex)}>
              Add Option
            </button>
          )}
          <label>
            <input
              value={question.correctAnswer}
              placeholder="Correct Answer"
              onChange={(e) =>
                handleCorrectAnswerChange(qIndex, e.target.value)
              }
            />
          </label>
          <button type="submit">Confirm</button>
        </form>
      ))}
      <button
        onClick={(event) => {
          addQuestion(event);
        }}
        className={styles["add-question-button"]}
      >
        +
      </button>
      <button
        className={styles["add-question-button"]}
        onClick={() => navigate(`/teacher/teacher-dashboard/${teacherID}`)}
      >
        Share Exam
      </button>
    </div>
  );
};

export default QuestionCreation;

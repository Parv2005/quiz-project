import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Quiz = ({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  fiftyFiftyUsed,
  audiencePollUsed,
  expertHelpUsed,
  flipQuestionUsed,
  setFlipQuestionUsed,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [filteredAnswers, setFilteredAnswers] = useState([]);
  const [audiencePollResults, setAudiencePollResults] = useState(null); // Store poll results
  const [letsPlay] = useSound(play);
  const [correctAnswerSound] = useSound(correct);
  const [wrongAnswerSound] = useSound(wrong);
  const [correctAnswer, setCorrectAnswer] = useState(null); // Track the correct answer

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    if (question) {
      setFilteredAnswers(question.answers); // Reset to all answers for the new question
      setAudiencePollResults(null); // Reset audience poll results
    }
  }, [question]);

  useEffect(() => {
    if (question && fiftyFiftyUsed) {
      const incorrectAnswers = question.answers.filter((ans) => !ans.correct);
      const toRemove = incorrectAnswers.sort(() => Math.random() - 0.5).slice(0, 2);
      setFilteredAnswers(question.answers.filter((ans) => !toRemove.includes(ans)));
    } else if (question) {
      setFilteredAnswers(question.answers); // Reset to all answers when 50/50 is not used
    }
  }, [fiftyFiftyUsed, question]);

  useEffect(() => {
    if (audiencePollUsed && question) {
      const incorrectAnswers = question.answers.filter((ans) => !ans.correct);

      // Assign more than 50% votes to the correct answer
      const correctVotes = Math.floor(Math.random() * 21) + 50; // Between 50% and 70%
      let remainingVotes = 100 - correctVotes;

      // Distribute remaining votes among incorrect answers
      const incorrectVotes = incorrectAnswers.map((_, index) => {
        if (index === incorrectAnswers.length - 1) {
          return remainingVotes; // Assign remaining votes to the last incorrect answer
        }
        const votes = Math.floor(Math.random() * (remainingVotes / (incorrectAnswers.length - index)));
        remainingVotes -= votes;
        return votes;
      });

      // Combine results
      const pollResults = question.answers.map((ans) => {
        if (ans.correct) {
          return { text: ans.text, votes: correctVotes };
        }
        const incorrectIndex = incorrectAnswers.findIndex((ia) => ia.text === ans.text);
        return { text: ans.text, votes: incorrectVotes[incorrectIndex] || 0 };
      });

      setAudiencePollResults(pollResults);
    }
  }, [audiencePollUsed, question]);

  useEffect(() => {
    if (expertHelpUsed && question) {
      // Highlight the correct answer
      const correctAnswer = question.answers.find((ans) => ans.correct);
      setFilteredAnswers([correctAnswer]); // Show only the correct answer
    } else if (question) {
      setFilteredAnswers(question.answers); // Reset to all answers when Expert Help is not used
    }
  }, [expertHelpUsed, question]);

  // Handle Flip Question Lifeline
  useEffect(() => {
    if (flipQuestionUsed) {
      console.log("Flip Question lifeline used");
      setQuestionNumber((prev) => prev + 1); // Move to the next question
      setFlipQuestionUsed(false); // Reset the lifeline state
    }
  }, [flipQuestionUsed, setQuestionNumber, setFlipQuestionUsed]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleClick = (item) => {
    console.log("Clicked answer:", item); // Debugging
    setSelectedAnswer(item);
    setClassName("answer active");

    delay(3000, () => {
      setClassName(item.correct ? "answer correct" : "answer wrong");
      if (!item.correct) {
        // Reveal the correct answer
        const correct = question.answers.find((ans) => ans.correct);
        setCorrectAnswer(correct);
      }
    });

    delay(5000, () => {
      if (item.correct) {
        correctAnswerSound();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
          setCorrectAnswer(null); // Reset the correct answer for the next question
        });
      } else {
        wrongAnswerSound();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {filteredAnswers.map((item) => (
          <div
            key={item.text}
            className={`answer ${selectedAnswer === item ? className : ""} ${
              expertHelpUsed && item.correct ? "highlight" : ""
            } ${correctAnswer === item ? "highlight" : ""}`}
            onClick={() => !selectedAnswer && handleClick(item)} // Prevent multiple clicks
          >
            {item.text}
          </div>
        ))}
      </div>
      {audiencePollResults && (
        <div className="audience-poll">
          <h3>Audience Poll Results:</h3>
          <ul>
            {audiencePollResults.map((result) => (
              <li key={result.text}>
                {result.text}: {result.votes}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;

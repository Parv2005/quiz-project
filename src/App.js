import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import "./App.css";
import Quiz from "./components/Quiz";
import { data, prizeMoney } from "./data";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [name, setName] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // Store shuffled questions
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [audiencePollUsed, setAudiencePollUsed] = useState(false);
  const [expertHelpUsed, setExpertHelpUsed] = useState(false);
  const [flipQuestionUsed, setFlipQuestionUsed] = useState(false);

  useEffect(() => {
    if (name) {
      // Shuffle questions when the game starts
      setShuffledQuestions(shuffleArray(data));
    }
  }, [name]);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        prizeMoney.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  useEffect(() => {
    setAudiencePollUsed(false); // Reset audience poll for the new question
  }, [questionNumber]);

  useEffect(() => {
    setFiftyFiftyUsed(false); // Reset 50/50 lifeline for the new question
  }, [questionNumber]);

  useEffect(() => {
    setExpertHelpUsed(false); // Reset Expert Help lifeline for the new question
  }, [questionNumber]);

  useEffect(() => {
    setFlipQuestionUsed(false); // Reset Flip Question lifeline for the new question
  }, [questionNumber]);

  return (
    <div className="App">
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (
        <MDBRow>
          <MDBCol md="9">
            <div className="main">
              {timeOut ? (
                <h1 className="earned">You Earned Total: {earned}</h1>
              ) : (
                <>
                  <div style={{ height: "50%", position: "relative" }}>
                    <div className="timer">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div style={{ height: "50%" }}>
                    <Quiz
                      data={shuffledQuestions} // Pass shuffled questions
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                      fiftyFiftyUsed={fiftyFiftyUsed}
                      audiencePollUsed={audiencePollUsed}
                      expertHelpUsed={expertHelpUsed} // Pass the state
                      flipQuestionUsed={flipQuestionUsed} // Pass the state
                      setFlipQuestionUsed={setFlipQuestionUsed} // Pass the setter
                    />
                  </div>
                </>
              )}
            </div>
          </MDBCol>
          <MDBCol md="3" className="money">
            <MDBListGroup className="money-list">
              <MDBRow>
                <span className="mb-2">
                <MDBBtn
                  style={{ border: "2px solid #ffffff", borderRadius: "10px", float: "right", marginRight: "10px", display: "flex", alignItems: "left" }}
                  
                  disabled={fiftyFiftyUsed}
                  onClick={() => setFiftyFiftyUsed(true)}
                >
                <img
                  src="/5050lifeline.webp" // Update the path to your image
                  alt="50/50"
                  style={{width: "50px", height: "50px", marginRight: "5px" }}
                />
            
                </MDBBtn>

                <MDBBtn
                  style={{ border: "2px solid #ffffff", borderRadius: "10px", float: "right", marginRight: "10px" }}
                  disabled={audiencePollUsed}
                  onClick={() => setAudiencePollUsed(true)}
                >

                <img
                  src="/audiencepoll.webp" // Update the path to your image
                  alt="audience"
                  style={{ width: "50px", height: "50px", marginRight: "5px" }}
                />
                
                </MDBBtn>

                <MDBBtn
                  style={{ border: "2px solid #ffffff", borderRadius: "10px", float: "right", marginRight: "10px", display: "flex", alignItems: "center" }}
                  disabled={expertHelpUsed} // Disable the button if the lifeline is used
                  onClick={() => setExpertHelpUsed(true)} // Mark the lifeline as used
                >
                  <img
                    src="/expert.png" // Update the path to your image
                    alt="expert"
                    style={{ width: "50px", height: "50px", marginRight: "5px" }}
                  />
                  
                </MDBBtn>

                <MDBBtn
                  style={{
                    border: "2px solid #ffffff",
                    borderRadius: "10px",
                    float: "right",
                    marginRight: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  disabled={flipQuestionUsed} // Disable the button if the lifeline is used
                  onClick={() => setFlipQuestionUsed(true)} // Mark the lifeline as used
                >
                  <img
                    src="/flipquestion.png" // Update the path to your image
                    alt="flip"
                    style={{ width: "50px", height: "50px", marginRight: "5px" }}
                  />
                  
                </MDBBtn>
                </span>
                </MDBRow>
                <MDBRow>
                <span className="mb-2">
                  <MDBBtn
                    style={{ float: "right" }}
                    className="mx-2"
                    color="light"
                    onClick={() => setTimeOut(true)}
                  >
                    Quit
                  </MDBBtn>
                  <MDBBtn
                    style={{ float: "right" }}
                    onClick={() => {
                      setName(null); // Reset the player's name
                      setQuestionNumber(1); // Reset to the first question
                      setEarned("₹ 0"); // Reset earned amount
                      setFiftyFiftyUsed(false); // Re-enable the 50/50 lifeline button
                      setAudiencePollUsed(false); // Re-enable the Audience Poll button
                      setExpertHelpUsed(false); // Re-enable the Expert Help button
                      setFlipQuestionUsed(false); // Re-enable the Flip Question button
                    }}
                  >
                    Exit
                  </MDBBtn>
                </span>
                <MDBCol md="6">Name: {name}</MDBCol>
                <MDBCol md="6">Total Earned: {earned}</MDBCol>
              </MDBRow>
              <hr />
              {prizeMoney.map((item) => (
                <li
                  key={item.id}
                  className={
                    questionNumber === item.id ? "item active" : "item"
                  }
                >
                  <h5 className="amount">{item.amount}</h5>
                </li>
              ))}
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      )}
    </div>
  );
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default App;

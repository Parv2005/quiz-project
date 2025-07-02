// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import App from "../App";

// test("starts the game and displays the quiz", () => {
//   render(<App />);
//   const startButton = screen.getByText(/start/i);
//   fireEvent.click(startButton);

//   expect(screen.getByText(/timer/i)).toBeInTheDocument();
//   expect(screen.getByText(/₹ 0/i)).toBeInTheDocument(); // Initial earned amount
// });

// test("50/50 lifeline removes two incorrect answers", async () => {
//   render(<App />);
//   const startButton = screen.getByText(/start/i);
//   fireEvent.click(startButton);

//   const fiftyFiftyButton = screen.getByAltText(/50\/50 lifeline/i);
//   fireEvent.click(fiftyFiftyButton);

//   await waitFor(() => {
//     const answers = screen.getAllByRole("button", { name: /answer/i });
//     expect(answers.length).toBe(2); // Only two answers should remain
//   });
// });

// test("Audience Poll lifeline displays poll results", async () => {
//   render(<App />);
//   const startButton = screen.getByText(/start/i);
//   fireEvent.click(startButton);

//   const audiencePollButton = screen.getByAltText(/audience poll/i);
//   fireEvent.click(audiencePollButton);

//   await waitFor(() => {
//     expect(screen.getByText(/Audience Poll Results:/i)).toBeInTheDocument();
//   });
// });

// test("Expert Help lifeline highlights the correct answer", async () => {
//   render(<App />);
//   const startButton = screen.getByText(/start/i);
//   fireEvent.click(startButton);

//   const expertHelpButton = screen.getByAltText(/expert help/i);
//   fireEvent.click(expertHelpButton);

//   await waitFor(() => {
//     const highlightedAnswer = screen.getByText(/correct answer text/i); // Replace with actual correct answer text
//     expect(highlightedAnswer).toHaveClass("highlight");
//   });
// });

// test("restarts the game and resets the state", () => {
//   render(<App />);
//   const startButton = screen.getByText(/start/i);
//   fireEvent.click(startButton);

//   const exitButton = screen.getByText(/exit/i);
//   fireEvent.click(exitButton);

//   expect(screen.getByText(/start/i)).toBeInTheDocument(); // Back to Start screen
//   expect(screen.queryByText(/timer/i)).not.toBeInTheDocument(); // Timer should not be visible
// });

// test("ends the game when the timer runs out", () => {
//   jest.useFakeTimers(); // Mock timers
//   render(<App />);
//   const startButton = screen.getByText(/start/i);
//   fireEvent.click(startButton);

//   jest.advanceTimersByTime(30000); // Simulate 30 seconds passing

//   // Use a function matcher to find the text
//   const earnedText = screen.getByText((content, element) => {
//     return element.textContent.includes("You Earned Total:");
//   });

//   expect(earnedText).toBeInTheDocument(); // Game over screen
//   jest.useRealTimers();
// });f

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test('renders App component', () => {
    render(<App />);
  });

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

const startGame = () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/Enter Name/i);
  fireEvent.change(nameInput, { target: { value: "TestUser" } });
  fireEvent.click(screen.getByText(/start/i));
};

test("starts the game and displays the quiz UI", () => {
  startGame();
  expect(screen.getByText(/Name: testuser/i)).toBeInTheDocument();
  expect(screen.getByText(/₹ 0/i)).toBeInTheDocument(); // Initial amount
});

// test("50/50 lifeline disables and removes two answers", async () => {
//   startGame();
//   const fiftyFiftyBtn = screen.getByAltText(/50\/50/i);
//   expect(fiftyFiftyBtn).toBeEnabled();

//   fireEvent.click(fiftyFiftyBtn);

//   await waitFor(() => {
//     const answers = screen.getAllByRole("button");
//     expect(answers.length).toBe(2);
//     expect(fiftyFiftyBtn).toBeDisabled();
//   });
// });

// test("Audience Poll lifeline disables and shows poll result", async () => {
//   startGame();
//   const pollBtn = screen.getByAltText(/audience/i);
//   fireEvent.click(pollBtn);

//   await waitFor(() => {
//     expect(pollBtn).toBeDisabled();
//     expect(screen.getByText(/Audience Poll Results:/i)).toBeInTheDocument();
//   });
// });

// test("Expert Help highlights the correct answer", async () => {
//   startGame();
//   const expertBtn = screen.getByAltText(/expert/i);
//   fireEvent.click(expertBtn);

//   await waitFor(() => {
//     const highlighted = screen.getAllByRole("button").find(btn =>
//       btn.classList.contains("highlight")
//     );
//     expect(highlighted).toBeTruthy();
//   });
// });

// test("Flip Question loads a new question", async () => {
//   startGame();
//   const firstQuestion = screen.getByTestId("question-text").textContent;

//   const flipBtn = screen.getByAltText(/flip/i);
//   fireEvent.click(flipBtn);

//   await waitFor(() => {
//     const newQuestion = screen.getByTestId("question-text").textContent;
//     expect(newQuestion).not.toBe(firstQuestion);
//     expect(flipBtn).toBeDisabled();
//   });
// });

test("Quit ends the game and shows final earned amount", () => {
  startGame();
  fireEvent.click(screen.getByText(/Quit/i));

  expect(screen.getByText(/You Earned Total:/i)).toBeInTheDocument();
});

test("Exit resets the game", () => {
  startGame();
  fireEvent.click(screen.getByText(/Exit/i));

  expect(screen.getByText(/Start/i)).toBeInTheDocument();
  expect(screen.queryByText(/Timer/i)).not.toBeInTheDocument();
});

// test("Timer runs out and ends the game", async () => {
//   startGame();

//   jest.advanceTimersByTime(30000);

//   await waitFor(() => {
//     expect(screen.getByText(/You Earned Total:/i)).toBeInTheDocument();
//   });
// });

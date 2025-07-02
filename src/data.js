const data = [
  {
    id: 1,
    question: "Where was the BRICS summit held in 2014?",
    answers: [
      {
        text: "Brazil",
        correct: true,
      },
      {
        text: "India",
        correct: false,
      },
      {
        text: "Russia",
        correct: false,
      },
      {
        text: "China",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which of these spices is the smallest in size?",
    answers: [
      {
        text: "Ajwain",
        correct: true,
      },
      {
        text: "Jeera",
        correct: false,
      },
      {
        text: "Saunf",
        correct: false,
      },
      {
        text: "Methi Seeds",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Which battle in 1757 marked the beginning of British occupation in India?",
    answers: [
      {
        text: "Plassey",
        correct: true,
      },
      {
        text: "Assaye",
        correct: false,
      },
      {
        text: "Buxar",
        correct: false,
      },
      {
        text: "Cuddalore",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Which is the second most spoken language of Nepal?",
    answers: [
      {
        text: "Bajjika",
        correct: false,
      },
      {
        text: "Nepali",
        correct: false,
      },
      {
        text: "Maithili",
        correct: true,
      },
      {
        text: "Bhojpuri",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "In which of these two sports is the term ‘free hit’ used?",
    answers: [
      {
        text: "Football, Squash",
        correct: false,
      },
      {
        text: "Badminton, Tennis",
        correct: false,
      },
      {
        text: "Badminton, Cricket",
        correct: true,
      },
      {
        text: "Hockey, Cricket",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question:
      "Which of these is the only Indian state to have a coastline on the Arabian Sea?",
    answers: [
      {
        text: "Odisha",
        correct: false,
      },
      {
        text: "Maharashtra",
        correct: true,
      },
      {
        text: "Andhra Pradesh",
        correct: false,
      },
      {
        text: "Tamil Nadu",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Which of these is a type of fruit?",
    answers: [
      {
        text: "Cabbage",
        correct: false,
      },
      {
        text: "Carrot",
        correct: false,
      },
      {
        text: "Radish",
        correct: false,
      },
      {
        text: "Tomato",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question:
      "Which river flows through marble stones in Madhya Pradesh??",
    answers: [
      {
        text: "Narmada",
        correct: true,
      },
      {
        text: "Shipra",
        correct: false,
      },
      {
        text: " Brahmaputra",
        correct: false,
      },
      {
        text: "Ganga",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "In which year was the first ever IPL match played?",
    answers: [
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
      {
        text: "2008",
        correct: true,
      },
      {
        text: "2009",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question:
      "Which social networking company made Parag Agrawal its CEO in 2021?",
    answers: [
      {
        text: "Instagram",
        correct: false,
      },
      {
        text: "Twitter",
        correct: true,
      },
      {
        text: "Facebook",
        correct: false,
      },
      {
        text: "Tumblr",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Where are the WHO headquarters located?",
    answers: [
      {
        text: "Paris, France",
        correct: false,
      },
      {
        text: "Monaco",
        correct: false,
      },
      {
        text: "Austin, Texas",
        correct: false,
      },
      {
        text: "Geneva, Switzerland",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question:
      "Which of these Indian cities is the capital of more than one state?",
    answers: [
      {
        text: "Hyderabad",
        correct: true,
      },
      {
        text: "Bhopal",
        correct: false,
      },
      {
        text: "Jaipur",
        correct: false,
      },
      {
        text: "Imphal",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Which of these is a type of dance?",
    answers: [
      {
        text: "Bharatanatyam",
        correct: true,
      },
      {
        text: "Sitar",
        correct: false,
      },
      {
        text: "Veena",
        correct: false,
      },
      {
        text: "Flute",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question:
      "Which of these films won the Academy Award for Best Picture in 2025?",
    answers: [
      {
        text: "Anora",
        correct: true,
      },
      {
        text: "The Brutalist",
        correct: false,
      },
      {
        text: "Dune: Part Two",
        correct: false,
      },
      {
        text: "The Substance",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question:
      "What was the name of the first primate launched into space?",
    answers: [
      {
        text: "George",
        correct: false,
      },
      {
        text: "John",
        correct: false,
      },
      {
        text: "Harrison",
        correct: false,
      },
      {
        text: "Albert",
        correct: true,
      },
    ],
  },

];

const prizeMoney = [
  { id: 1, amount: "₹ 5000" },
  { id: 2, amount: "₹ 15000" },
  { id: 3, amount: "₹ 30000" },
  { id: 4, amount: "₹ 60000" },
  { id: 5, amount: "₹ 100000" },
  { id: 6, amount: "₹ 150000" },
  { id: 7, amount: "₹ 250000" },
  { id: 8, amount: "₹ 400000" },
  { id: 9, amount: "₹ 600000" },
  { id: 10, amount: "₹ 1000000" },
  { id: 11, amount: "₹ 5000000" },
  { id: 12, amount: "₹ 100000000" },
  { id: 13, amount: "₹ 300000000" },
  { id: 14, amount: "₹ 500000000" },
  { id: 15, amount: "₹ 1000000000" },
].reverse();

export { prizeMoney, data };

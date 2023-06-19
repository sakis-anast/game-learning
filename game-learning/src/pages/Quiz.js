import  { useState } from "react";
import "../styles/quiz.scss";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const database = [
    {
      text: "Which of the following sports is not part of the triathlon?",
      options: [
        { id: 0, text: "Swimming", isCorrect: false },
        { id: 1, text: "Cycling", isCorrect: false },
        { id: 2, text: "Running", isCorrect: false },
        { id: 3, text: "Horse-Riding", isCorrect: true },
      ],
    },
    {
      text: "At which bridge does the annual Oxford and Cambridge boat race start?",
      options: [
        { id: 0, text: "Putney", isCorrect: true },
        { id: 1, text: "Hammersmith", isCorrect: false },
        { id: 2, text: "Vauxhall ", isCorrect: false },
        { id: 3, text: "Battersea", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who wrote Harry Potter?",
      options: [
        { id: 0, text: "J.K. Rowling", isCorrect: true },
        { id: 1, text: "J.R.R. Tolkien", isCorrect: false },
        { id: 2, text: "Terry Pratchett", isCorrect: false },
        { id: 3, text: "Daniel Radcliffe", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Sam Malone was a former relief pitcher for which baseball team?",
      options: [
        { id: 0, text: "New York Mets", isCorrect: false },
        { id: 1, text: "Baltimore Orioles", isCorrect: false },
        { id: 2, text: "Boston Red Sox", isCorrect: true },
        { id: 3, text: "Milwaukee Brewers", isCorrect: false },
      ],
    },
    {
      text: "How many spaces are there on a standard Monopoly board?",
      options: [
        { id: 0, text: "44", isCorrect: false },
        { id: 1, text: "46", isCorrect: false },
        { id: 2, text: "38", isCorrect: false },
        { id: 3, text: "40", isCorrect: true },
      ],
    },
    {
      text: "How many dice are used in the game of Yahtzee?",
      options: [
        { id: 0, text: "5", isCorrect: true },
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "6", isCorrect: false },
        { id: 3, text: "7", isCorrect: false },
      ],
    },
    {
      text: "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
      options: [
        { id: 0, text: "Jason", isCorrect: true },
        { id: 1, text: "Castor", isCorrect: false },
        { id: 2, text: "Daedalus", isCorrect: false },
        { id: 3, text: "Odysseus", isCorrect: false },
      ],
    },
    {
      text: "Which gas forms about 78% of the Earth's atmosphere?",
      options: [
        { id: 0, text: "Oxygen", isCorrect: false },
        { id: 1, text: "Nitrogen", isCorrect: true },
        { id: 2, text: "Argon", isCorrect: false },
        { id: 3, text: "Carbon ", isCorrect: false },
      ],
    },
    {
      text: "In a standard game of Monopoly, what colour are the two cheapest properties?",
      options: [
        { id: 0, text: "Green", isCorrect: false },
        { id: 1, text: "Brown", isCorrect: true },
        { id: 2, text: "Yellow", isCorrect: false },
        { id: 3, text: "Blue", isCorrect: false },
      ],
    },
    {
      text: "King Henry VIII was the second monarch of which European royal house?",
      options: [
        { id: 0, text: "York", isCorrect: false },
        { id: 1, text: "Stuart", isCorrect: false },
        { id: 2, text: "Lancaster", isCorrect: false },
        { id: 3, text: "Tudor", isCorrect: true },
      ],
    },
    {
      text: "Which animated movie was first to feature a celebrity as a voice actor?",
      options: [
        { id: 0, text: "Aladdin", isCorrect: true },
        { id: 1, text: "Toy Story", isCorrect: false },
        { id: 2, text: "The Hunchback of Notre Dame ", isCorrect: false },
        { id: 3, text: "James and the Giant Peach", isCorrect: false },
      ],
    },
    {
      text: "What is the largest animal currently on Earth?",
      options: [
        { id: 0, text: "Blue Whale", isCorrect: true },
        { id: 1, text: "Orca", isCorrect: false },
        { id: 2, text: "Colossal Squid", isCorrect: false },
        { id: 3, text: "Giraffe", isCorrect: false },
      ],
    },
    {
      text: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
      options: [
        { id: 0, text: "512", isCorrect: false },
        { id: 1, text: "1000", isCorrect: true },
        { id: 2, text: "1024", isCorrect: false },
        { id: 3, text: "500", isCorrect: false },
      ],
    },
    {
      text: "How many planets make up our Solar System?",
      options: [
        { id: 0, text: "7", isCorrect: false },
        { id: 1, text: "8", isCorrect: true },
        { id: 2, text: "9", isCorrect: true },
        { id: 3, text: "6", isCorrect: false },
      ],
    },
    {
      text: "What is the title of song on the main menu in Halo?",
      options: [
        { id: 0, text: "Opening Suite", isCorrect: false },
        { id: 1, text: "Shadows", isCorrect: false },
        { id: 2, text: "Suite Autumn", isCorrect: false },
        { id: 3, text: "Halo", isCorrect: true },
      ],
    },
    {
      text: "The greek god Poseidon was the god of what?",
      options: [
        { id: 0, text: "Sea", isCorrect: true },
        { id: 1, text: "War", isCorrect: false },
        { id: 2, text: "Sun", isCorrect: false },
        { id: 3, text: "Fire", isCorrect: false },
      ],
    },
    {
      text: "Which class of animals are newts members of?",
      options: [
        { id: 0, text: "Amphibian", isCorrect: true },
        { id: 1, text: "Fish", isCorrect: false },
        { id: 2, text: "Reptiles", isCorrect: false },
        { id: 3, text: "Mammals", isCorrect: false },
      ],
    },
    {
      text: "What is the name of Poland in Polish?",
      options: [
        { id: 0, text: "Pupcia", isCorrect: false },
        { id: 1, text: "Polska", isCorrect: true },
        { id: 2, text: "Polszka", isCorrect: false },
        { id: 3, text: "Polszkia", isCorrect: false },
      ],
    },
    {
      text: "Greenland is a part of which kingdom?",
      options: [
        { id: 0, text: "Sweden", isCorrect: false },
        { id: 1, text: "United Kingdom", isCorrect: false },
        { id: 2, text: "Denmark", isCorrect: true },
        { id: 3, text: "Norway", isCorrect: false },
      ],
    },
    {
      text: "Who is the main character of the game Half-Life: Opposing Force?",
      options: [
        { id: 0, text: "Alyx Vance", isCorrect: false },
        { id: 1, text: "Gordon Freeman", isCorrect: false },
        { id: 2, text: "Barney Calhoun", isCorrect: false },
        { id: 3, text: "Adrian Shephard", isCorrect: true },
      ],
    },
    {
      text: "Butters Stotch, Pip Pirrup, and Wendy Testaburger are all characters in which long running animated TV series?",
      options: [
        { id: 0, text: "South Park", isCorrect: true },
        { id: 1, text: "The Simpsons", isCorrect: false },
        { id: 2, text: "Family Guy", isCorrect: false },
        { id: 3, text: "Bob's Burgers", isCorrect: false },
      ],
    },
    {
      text: "Which US state has the highest population?",
      options: [
        { id: 0, text: "California", isCorrect: true },
        { id: 1, text: "Texas", isCorrect: false },
        { id: 2, text: "Florida", isCorrect: false },
        { id: 3, text: "New York", isCorrect: false },
      ],
    },
    {
      text: "Which of these is NOT a playable character in the 2016 video game Overwatch?",
      options: [
        { id: 0, text: "Mercy", isCorrect: false },
        { id: 1, text: "Invoker", isCorrect: true },
        { id: 2, text: "Winston", isCorrect: false },
        { id: 3, text: "CarZenyattabon ", isCorrect: false },
      ],
    },
    {
      text: "Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
      options: [
        { id: 0, text: "Chicken Soup", isCorrect: false },
        { id: 1, text: "Casserole", isCorrect: true },
        { id: 2, text: "Sub Sandwich", isCorrect: false },
        { id: 3, text: "Pepperoni Pizza", isCorrect: false },
      ],
    },
    {
      text: "Five dollars is worth how many nickles?",
      options: [
        { id: 0, text: "25", isCorrect: false },
        { id: 1, text: "50", isCorrect: false },
        { id: 2, text: "69", isCorrect: false },
        { id: 3, text: "100", isCorrect: true },
      ],
    },
    {
      text: "According to the American rapper Nelly, what should you do when its hot in here?",
      options: [
        { id: 0, text: "Take off all your clothes", isCorrect: true },
        { id: 1, text: "Take a cool shower", isCorrect: false },
        { id: 2, text: "Drink some water", isCorrect: false },
        { id: 3, text: "Go skinny dipping", isCorrect: false },
      ],
    },
    {
      text: "Harvard University is located in which city?",
      options: [
        { id: 0, text: "Cambridge", isCorrect: true },
        { id: 1, text: "Providence", isCorrect: false },
        { id: 2, text: "Washington ", isCorrect: false },
        { id: 3, text: "New York", isCorrect: false },
      ],
    },
    {
      text: "Valve Corporation is an American video game developer located in which city?",
      options: [
        { id: 0, text: "Austin, Texas", isCorrect: false },
        { id: 1, text: "Bellevue, Washington", isCorrect: true },
        { id: 2, text: "Seattle, Washington", isCorrect: false },
        { id: 3, text: "San Francisco, California", isCorrect: false },
      ],
    },
    {
      text: "Which actor portrays Walter White in the series Breaking Bad",
      options: [
        { id: 0, text: "Andrew Lincoln", isCorrect: false },
        { id: 1, text: "Aaron Paul", isCorrect: false },
        { id: 2, text: "Bryan Cranston", isCorrect: true },
        { id: 3, text: "RJ Mitte", isCorrect: false },
      ],
    },
    {
      text: "How long is an IPv6 address?",
      options: [
        { id: 0, text: "128 bits", isCorrect: true },
        { id: 1, text: "32 bits", isCorrect: false },
        { id: 2, text: "64 bits", isCorrect: false },
        { id: 3, text: "128 bytes", isCorrect: false },
      ],
    },
    {
      text: "Which painting was not made by Vincent Van Gogh?",
      options: [
        { id: 0, text: "The Ninth Wave", isCorrect: true },
        { id: 1, text: "Cafe Terrace at Night", isCorrect: false },
        { id: 2, text: "Bedroom In Arles", isCorrect: false },
        { id: 3, text: "Starry Night", isCorrect: false },
      ],
    },
    {
      text: "Who won the premier league title in the 2015-2016 season?",
      options: [
        { id: 0, text: "Leicester ", isCorrect: true },
        { id: 1, text: "Tottenham ", isCorrect: false },
        { id: 2, text: "Man City", isCorrect: false },
        { id: 3, text: "Chelsea", isCorrect: false },
      ],
    },
    {
      text: "Which of these companies does NOT manufacture motorcycles?",
      options: [
        { id: 0, text: "Honda", isCorrect: false },
        { id: 1, text: "Toyota", isCorrect: true },
        { id: 2, text: "Kawasaki", isCorrect: false },
        { id: 3, text: "Yamaha ", isCorrect: false },
      ],
    },
    {
      text: "What is the maximum HP in Terraria?",
      options: [
        { id: 0, text: "100", isCorrect: false },
        { id: 1, text: "500", isCorrect: true },
        { id: 2, text: "400", isCorrect: false },
        { id: 3, text: "1000", isCorrect: false },
      ],
    },
  ];
  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
  const questions = getRandom(database, 5)
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  


 
  return (
    <div className="final">
      <h1> Quiz </h1>
      <h2>Score: {score}</h2>

      {showResults ? (
        <div>
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="btn1" onClick={() => restartGame()}>
            Restart game
          </button>
          <br />

          <br />

        </div>
      ) : (
        <div className="questions">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
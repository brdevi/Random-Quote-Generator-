import React, { useState } from "react";

const QuoteBox = () => {
  const quotes = [
    {
      text: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
  ];

  // State to hold the current quote
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  // Function to get a new random quote
  const fetchQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <div id="quote-box">
      <h2>Random Quote Generator</h2>

      <p id="text">"{quote.text}"</p>
      <p id="author">- {quote.author}</p>

      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>

      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote.text}" - ${quote.author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;

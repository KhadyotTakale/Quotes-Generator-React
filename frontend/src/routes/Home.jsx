import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const API_URL = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const API_KEY = "XK2td8claz/88LrbEysvNQ==HkTuaqYsTGISqTn2";

const Home = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      const data = await response.json();
      if (response.ok && data.length > 0) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } else {
        throw new Error("No quotes found");
      }
    } catch (error) {
      console.error("Error fetching the quote:", error);
      alert("Failed to fetch the quote. Please try again later.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <h1 className="heading">Motivational Quotes</h1>
        <div className="quotes">
          <p>{quote}</p>
          <p>
            <em>— {author}</em>
          </p>
        </div>
        <button className="new-quote-button" onClick={fetchQuote}>
          Generate New Quote
        </button>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./quote.css";

function Quote() {
  const [quote, setQuote] = useState(null); // Fix initial state

  const fetchQuote = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/quotes");
      const randomIndex = Math.floor(Math.random() * res.data.quotes.length);
      setQuote(res.data.quotes[randomIndex]); // Select a random quote
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const authorImages = {
    "Rumi": "https://www.fact-file.com/wp-content/uploads/2021/07/RUMI-16-FACTS-THAT-INSPIRED-US-TO-IMPLEMENT-AS-ACTS-867x1024.jpeg",
    "Abdul Kalam": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/220px-A._P._J._Abdul_Kalam.jpg",
    "Bill Gates": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/220px-Bill_Gates_2018.jpg",
    "Albert Einstein": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "Abraham Lincoln": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/220px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    "Oprah Winfrey": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/220px-Oprah_in_2014.jpg",
    "Muhammad Ali": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/220px-Muhammad_Ali_NYWTS.jpg",
    "William Shakespeare": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg",
    "Mother Teresa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/220px-Mother_Teresa_1.jpg",
    "Nelson Mandela": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg",
    "Walt Disney": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Walt_Disney_1946.JPG/220px-Walt_Disney_1946.JPG",
    "Aristotle": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    "Abu Bakr (R.A)": "https://th.bing.com/th/id/OIP.MZdbNWvHFa43iWGUkjVl3gHaEJ?rs=1&pid=ImgDetMain", 
    "Ali ibn Abi Talib (R.A)": "https://th.bing.com/th/id/OIP.BarbbkaFZO3pnNOlnO-88wHaKG?rs=1&pid=ImgDetMain",
    "Umar ibn Al-Khattāb (R.A)": "https://th.bing.com/th/id/OIP.sjXeN9Bdht8EFFkG9VMQVgHaHa?rs=1&pid=ImgDetMain",
    "default": "https://via.placeholder.com/150" // Generic placeholder image
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-5" style={{color:'whitesmoke'}}>RANDOM QUOTES GENERATOR</h1>
    
    
    <div className="glass-effect mt-5">
      <div className="card text-center mt-5">
        <div className="container">
          <div className="row">
            <div className="card-body">
              {quote ? (
                <>
                  <img
                    src={authorImages[quote.author] || authorImages["default"]}
                    alt={quote.author}
                    className="author-image mb-3"
                    style={{ width: "120px", borderRadius: "50%" }}
                  />
                  <h2 className="card-title">{quote.author}</h2>
                  <p className="card-text">{quote.quote}</p>
                  <button onClick={fetchQuote} className="btn btn-primary">
                    New Quote
                  </button>
                </>
              ) : (
                <p>Loading...</p> // Display a loading message
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Quote;

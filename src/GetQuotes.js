import React, { useEffect, useState, useRef } from "react";
import "./styles/cv.css";

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GetQuotes = (props) => {
  const [qdata, setQdata] = useState("null");
  const [qauth, setQauth] = useState("null");
  const [newQte, setNewQte] = useState(true);
  const ftrHgtRef = useRef(null);
  const [done, setDone] = useState(false);

  const GenerateNewQuote = () => {
    async function fetchData() {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        response
          .json()
          .then((response) => {
            let numbr = randomNumberInRange(0, response.length - 1);
            setQdata(response[numbr]?.text);
            const parts = response[numbr]?.author?.split(","); // Splitting by comma
            // Check if there's more than one part after splitting
            const firstPart =
              parts?.length > 1 ? parts[0] : response[numbr]?.author;
            setQauth(firstPart);
          })
          .catch((err) => console.error(err));
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchData();
  };
  //   , [newQte]);

  useEffect(() => {
    if (!done) {
      setDone(true);
      GenerateNewQuote();
    }
  }, []);

  return (
    <div ref={ftrHgtRef} className="frameAll">
      <h3>Quote for the moment</h3>
      <div
        style={{
          fontStyle: "italic",
          marginLeft: "1rem",
        }}
      >
        {qdata === null || qdata?.length <= 0 ? (
          "internet not connected"
        ) : (
          <div>
            <span>{qdata + " " + qauth}</span>
            <span
              style={{ fontSize: "0.8rem", fontStyle: "normal", color: "gray" }}
            >
              - from API:type.fit
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetQuotes;

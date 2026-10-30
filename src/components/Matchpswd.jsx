import React, { useState } from 'react';
import './Matchpswd.css';
import { useNavigate } from 'react-router-dom';

function Matchpswd() {
  const navigate = useNavigate();

  const [response, setResponse] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function HandleResponse(answer) {

    if (isTransitioning) return;

    setSelectedAnswer(answer);
    setIsTransitioning(true);

    // Stars animation complete hone ke baad page switch
    setTimeout(() => {
      setResponse(answer);
    }, 1100);
  }

  if (response === "yes") {
    return navigate("/celebration")
  }

  if (response === "no") {
    return navigate("/nopage");
  }

  return (
    <div
      className={`main-div ${
        isTransitioning ? "match-page-exit" : ""
      }`}
    >

      {/* ⭐ STAR TRANSITION */}
      {isTransitioning && (
        <div className="match-star-transition">

          {Array.from({ length: 80 }).map((_, index) => (
            <span
              key={index}
              className="match-transition-star"
              style={{
                left: `${(index * 31) % 100}%`,
                top: `${(index * 53) % 100}%`,
                animationDelay: `${(index % 12) * 0.035}s`,
              }}
            >
              ✦
            </span>
          ))}

          <div className="match-transition-glow"></div>

        </div>
      )}

      <div className="content-div">

        <h2 id="mainheading">
          A Special Surprise 🎁
        </h2>

        <p id="p1">
          Just For You ❤️
        </p>

        <p id="p2">
          Do you want to see?
        </p>

        <div className="buttons">

          <span
            id="btn1"
            className={`response-btn ${
              selectedAnswer === "yes" ? "selected-btn" : ""
            }`}
            onClick={() => HandleResponse("yes")}
          >
            Yes 🥰
          </span>

          <span
            id="btn2"
            className={`response-btn ${
              selectedAnswer === "no" ? "selected-btn" : ""
            }`}
            onClick={() => HandleResponse("no")}
          >
            No 🧸
          </span>

        </div>

      </div>

    </div>
  );
}

export default Matchpswd;
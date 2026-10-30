import React, { useRef, useState } from 'react';
import './NoPage.css';

import { useNavigate } from 'react-router-dom';

function NoPage() {

  const navigate = useNavigate();

  const paragraphs = [
    "No nhi karna chahie tha tum ko",
    "Tumne Mujy bhoot hurt kia No kar ke",
    "Main tum se naraz hu ab",
    "Chlo ab wapis ajao dobara Yes karo",
    "Ab jaldi se wapis ajao ❤️"
  ];

  const [currentPara, setCurrentPara] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function HandleTypingEnd(event) {

    
    if (event.animationName !== "typing") {
      return;
    }

    setCompleted(prev => {
      if (prev.includes(currentPara)) {
        return prev;
      }
      return [...prev, currentPara];
    });

    if (currentPara < paragraphs.length - 1) {
      setCurrentPara(prev => prev + 1);
    }
  }

  /* =========================================
     ❤️ GO BACK & REDIRECT TO MATCHPSWD
  ========================================= */

  const [backstate, setBackstate] = useState("");

  function HandleBack(answer) {

      setBackstate(answer);

  }

  if(backstate === "back")

    {
      return navigate("/match");
    }

  return (

    <main className='nopage-container'>

        <div className="main-container">

        {/* ⭐ STAR TRANSITION */}
        {isTransitioning && (
          <div className="no-star-transition">
            {Array.from({ length: 80 }).map((_, index) => (
              <span
                key={index}
                className="no-transition-star"
                style={{
                  left: `${(index * 31) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                  animationDelay: `${(index % 12) * 0.035}s`
                }}
              >
                ✦
              </span>
            ))}
            <div className="no-transition-glow"></div>
          </div>
        )}

        {/* ❤️ PAGE CONTENT */}
        <div className="no-page-content">
          <h2>No Q Kia Yarrr !!!</h2>

          <div className="text-container">
            {paragraphs.map((text, index) => {
              if (completed.includes(index)) {
                return (
                  <p key={index} className="completed-para">
                    {text}
                  </p>
                );
              }

              if (index === currentPara) {
                return (
                  <p
                    key={index}
                    className="typewriter"
                    onAnimationEnd={HandleTypingEnd}
                  >
                    {text}
                  </p>
                );
              }

              return null;
            })}
          </div>

          {/* ❤️ BACK BUTTON */}
          <button
            id="backbtn"
            onClick={() => HandleBack("back")}
            disabled={isTransitioning}
          >
            {isTransitioning
              ? "✨ Going Back..."
              : "Go Back ❤️"
            }
          </button>
        </div>
        </div>

    </main>
    
  );
}

export default NoPage;
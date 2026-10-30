import React, { useState } from 'react';
import './YesPage.css';
import gift from '../assets/gift.jfif';
import { useNavigate } from 'react-router-dom';


function YesPage() {
  const Navigate = useNavigate();

  const [celebrate, setCelebrate] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  function HandleCelebration() {

    if (isTransitioning) return;

    setIsTransitioning(true);

    // ⭐ Animation complete hone ke baad next page
    setTimeout(() => {
      setCelebrate("yes");
    }, 1100);
  }

  if (celebrate === "yes") {
    return Navigate("/celebrationmessage");
  }

  return (
    <div className={`yespage-div ${
      isTransitioning ? "yes-page-exit" : ""
    }`}>

      {/* ⭐ STAR TRANSITION */}
      {isTransitioning && (
        <div className="yes-star-transition">

          {Array.from({ length: 80 }).map((_, index) => (
            <span
              key={index}
              className="yes-transition-star"
              style={{
                left: `${(index * 31) % 100}%`,
                top: `${(index * 53) % 100}%`,
                animationDelay: `${(index % 12) * 0.035}s`,
              }}
            >
              ✦
            </span>
          ))}

          <div className="yes-transition-glow"></div>

        </div>
      )}

      <img
        src={gift}
        alt="image"
        className="giftimage"
      />

      <h1>
        Time To Celebrate!
      </h1>

      <p>
        The countdown is over...Let's celebrate 🎉
      </p>

      <button
        onClick={HandleCelebration}
        disabled={isTransitioning}
      >
        {isTransitioning
          ? "✨ Get Ready..."
          : "Lets Celebrate 🥳"
        }
      </button>

    </div>
  );
}

export default YesPage;
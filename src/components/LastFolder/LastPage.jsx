import React, { useEffect, useState } from "react";
import "./LastPage.css";

function TheEndPage() {

  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowFinal(true);
    }, 7500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="last-main-container">

        <main className="end-page">

              {/* =========================================
                  Background Stars
              ========================================= */}

              <div className="end-stars">

                {Array.from({ length: 70 }).map((_, index) => (

                  <span
                    key={index}
                    className="end-star"
                    style={{
                      left: `${(index * 37) % 100}%`,
                      top: `${(index * 61) % 100}%`,
                      animationDelay: `${(index % 8) * 0.4}s`,
                    }}
                  >
                    ✦
                  </span>

                ))}

              </div>


              {/* =========================================
                  Floating Hearts
              ========================================= */}

              <div className="floating-hearts">

                <span>💖</span>
                <span>💕</span>
                <span>❤️</span>
                <span>💗</span>
                <span>💞</span>
                <span>💓</span>
                <span>💖</span>
                <span>💕</span>

              </div>


              {/* =========================================
                  Moon Glow
              ========================================= */}

              <div className="moon-glow"></div>


              {/* =========================================
                  Main Content
              ========================================= */}

              <section className="end-content">

                {/* Small Intro */}

                <p className="end-small-text">
                  And finally... 🌙
                </p>


                {/* Main Heading */}

                <h1 className="end-title">
                  This Wasn't Just A Birthday...
                </h1>


                {/* Second Heading */}

                <h2 className="end-subtitle">
                  It Was A Little Journey Of Love ❤️
                </h2>


                {/* Animated Line */}

                <div className="end-line">
                  <span></span>
                </div>


                {/* Message */}

                <div className="end-message">

                  <p className="message-one">
                    Every page you opened...
                  </p>

                  <p className="message-two">
                    Every surprise you discovered...
                  </p>

                  <p className="message-three">
                    Every little smile this website brought...
                  </p>

                  <p className="message-four">
                    Was made with one simple reason...
                  </p>

                </div>


                {/* =========================================
                    Big Final Message
                ========================================= */}

                <div className="final-love">

                  <span className="final-heart">
                    ❤️
                  </span>

                  <h2>
                    You Are Special
                  </h2>

                  <p>
                    Not just today.
                    <br />
                    Not just on your birthday.
                    <br />
                    But every single day.
                  </p>

                </div>


                {/* =========================================
                    Final Text
                ========================================= */}

                {showFinal && (

                  <div className="the-end">

                    <div className="end-divider">
                      ✨ ❤️ ✨
                    </div>

                    <h3>
                      THE END
                    </h3>

                    <p>
                      But our story...
                    </p>

                    <strong>
                      Is Never Ending. ❤️
                    </strong>

                    <span className="final-signature">
                      Made with all my love 💕
                    </span>

                  </div>

                )}

              </section>


              {/* =========================================
                  Bottom Glow
              ========================================= */}

              <div className="bottom-glow"></div>

            </main>

    </div>
            
  );
}

export default TheEndPage;

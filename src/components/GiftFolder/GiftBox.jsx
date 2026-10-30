import React, { useState } from "react";
import "./GiftBox.css";
import { useNavigate } from "react-router-dom";


function GiftPage() {
  const Navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const [laststate, setLaststate] = useState("");

  const openGift = () => {
    if (!isOpened) {
      setIsOpened(true);
    }
  };

 function HandleLast(answer) 
 {
  setLaststate(answer);
 }

 if(laststate === "last")
 {
  return Navigate("/love")
 }



  return (

      <div className="gift-main-container">

          <main className="gift-page">

              {/* =========================
                  Background Stars
              ========================= */}
              <div className="gift-background-stars">
                {Array.from({ length: 45 }).map((_, index) => (
                  <span
                    key={index}
                    className="gift-star"
                    style={{
                      left: `${(index * 29) % 100}%`,
                      top: `${(index * 47) % 100}%`,
                      animationDelay: `${(index % 6) * 0.4}s`,
                    }}
                  >
                    ✦
                  </span>
                ))}
              </div>


              {/* =========================
                  Heading
              ========================= */}
              <section className="gift-title">

                <p>One more surprise for you 💌</p>

                <h1>Open Your Gift 🎁</h1>

                <span id="gift-instruction">
                  Click on the gift box and see what comes out
                </span>

              </section>


              {/* =========================
                  Gift Area
              ========================= */}
              <section
                className={`gift-area ${isOpened ? "opened" : ""}`}
              >

                {/* =========================
                    Surprise Content
                ========================= */}
                <div className="gift-surprise">

                  {/* Floating Hearts */}
                  <div className="surprise-hearts">

                    <span className="heart-one">💖</span>
                    <span className="heart-two">💕</span>
                    <span className="heart-three">💗</span>
                    <span className="heart-four">💞</span>
                    <span className="heart-five">❤️</span>

                  </div>


                  {/* Sparkles */}
                  <div className="surprise-sparkles">
                    ✨ ✨ ✨
                  </div>


                  {/* Bracelet */}
                  <div className="bracelet-container">

                    <div className="bracelet">

                      <span className="bracelet-charm">
                        ❤️
                      </span>

                    </div>

                  </div>


                  {/* Surprise Heading */}
                  <h2>
                    Surprise! 🎉
                  </h2>


                  {/* Surprise Text */}
                  <p>
                    A little bracelet for the most special
                    person in my life.
                    <br />
                    You are my favorite gift forever. ❤️
                  </p>

                </div>


                {/* =========================
                    Gift Box
                ========================= */}
                <div
                  className="gift-box"
                  onClick={openGift}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      openGift();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Open gift box"
                >

                  {/* =========================
                      Gift Lid
                  ========================= */}
                  <div className="gift-lid">

                    <div className="lid-ribbon"></div>

                  </div>


                  {/* =========================
                      Gift Body
                  ========================= */}
                  <div className="gift-body">

                    <div className="vertical-ribbon"></div>

                    <div className="horizontal-ribbon"></div>

                  </div>


                  {/* =========================
                      Gift Bow
                  ========================= */}
                  <div className="gift-bow">

                    <span className="bow-left"></span>

                    <span className="bow-right"></span>

                    <span className="bow-center"></span>

                  </div>

                </div>


                {/* =========================
                    Hint
                ========================= */}
                {!isOpened && (
                  <p className="gift-hint">
                    Click the box to open your surprise 🎀
                  </p>
                )}

              </section>


              {/* =========================
                  Bottom Message
              ========================= */}
              {isOpened && (
                <section className="gift-bottom-message">

                  <h2>
                    A Gift Full of Love 💕
                  </h2>

                  <p>
                    Every smile of yours is precious to me.
                    This surprise is small, but my love for
                    you is endless.
                  </p>

                </section>
              )}

            <button 
                id="lastpage"
                onClick={() => HandleLast("last")}
                style={{ marginTop: "20px" }}
            >
                Torha aor →
            </button>

            </main>
  

      </div>
  )
            
}

export default GiftPage;

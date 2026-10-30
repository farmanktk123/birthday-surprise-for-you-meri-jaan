import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ourfuture.css";

function Ourfuture() {

  const navigate = useNavigate();

  const [showPromise, setShowPromise] = useState(false);

  const [isExiting, setIsExiting] = useState(false);


  // =========================
  // FUTURE MOMENTS
  // =========================

  const futureMoments = [
    {
      icon: "🌅",
      title: "More Beautiful Mornings",
      text: "I want to wake up knowing that another beautiful day is waiting for us together."
    },

    {
      icon: "✈️",
      title: "More Adventures",
      text: "I want us to explore new places, discover new things and create memories that we will talk about for years."
    },

    {
      icon: "😂",
      title: "More Laughter",
      text: "I hope our future is filled with silly jokes, random conversations and moments where we laugh until we can't breathe."
    },

    {
      icon: "🏡",
      title: "Our Little World",
      text: "A place we can call ours, filled with peace, love, little traditions and countless beautiful memories."
    },

    {
      icon: "🌙",
      title: "Through Every Season",
      text: "Life will bring easy days and difficult days, but I want to hold your hand through every season."
    },

    {
      icon: "👵🏻",
      title: "Growing Old Together",
      text: "One day I want us to look back at our journey and smile at all the beautiful moments we created together."
    }
  ];


  // =========================
  // PROMISE
  // =========================

  const handlePromise = () => {
    setShowPromise(true);
  };


  const closePromise = () => {
    setShowPromise(false);
  };


  // =========================
  // END PAGE
  // =========================

  const handleEndPage = () => {

    setIsExiting(true);

    setTimeout(() => {

      navigate("/endpage");

    }, 800);

  };


  return (

    <div className="future-main-container">

        <div
              className={`future-page ${
                isExiting ? "future-page-exit" : ""
              }`}
            >


              {/* =================================
                  BACKGROUND GLOWS
              ================================= */}

              <div className="future-glow glow-one"></div>

              <div className="future-glow glow-two"></div>

              <div className="future-glow glow-three"></div>


              {/* =================================
                  STARS
              ================================= */}

              <div className="future-stars">

                {Array.from({ length: 45 }).map((_, index) => (

                  <span
                    key={index}
                    className="future-star"
                    style={{
                      left: `${(index * 37) % 100}%`,
                      top: `${(index * 61) % 100}%`,
                      animationDelay: `${(index % 6) * 0.6}s`
                    }}
                  >
                    ✦
                  </span>

                ))}

              </div>


              {/* =================================
                  FLOATING HEARTS
              ================================= */}

              <div className="future-hearts">

                {Array.from({ length: 15 }).map((_, index) => (

                  <span
                    key={index}
                    style={{
                      left: `${(index * 29) % 100}%`,
                      animationDelay: `${index * 0.8}s`,
                      animationDuration: `${7 + (index % 4)}s`
                    }}
                  >
                    {index % 2 === 0 ? "♡" : "♥"}
                  </span>

                ))}

              </div>


              {/* =================================
                  MAIN CONTENT
              ================================= */}

              <main className="future-container">


                {/* =================================
                    HERO
                ================================= */}

                <section className="future-hero">

                  <div className="future-heart-icon">
                    ❤️
                  </div>


                  <p className="future-eyebrow">
                    OUR STORY DOESN'T END HERE
                  </p>


                  <h1>
                    Our <span>Future</span>
                  </h1>


                  <p className="future-intro">
                    I don't know exactly what tomorrow will bring...
                    <br />
                    but I know who I want beside me when it arrives.
                  </p>


                  <div className="scroll-indicator">

                    <span></span>

                    <p>
                      OUR JOURNEY AHEAD
                    </p>

                  </div>

                </section>


                {/* =================================
                    TIMELINE
                ================================= */}

                <section className="future-timeline">


                  <div className="timeline-line"></div>


                  {futureMoments.map((moment, index) => (

                    <div
                      className={`future-item ${
                        index % 2 === 0
                          ? "left-item"
                          : "right-item"
                      }`}
                      key={index}
                    >


                      {/* TIMELINE DOT */}

                      <div className="timeline-dot">
                        ❤️
                      </div>


                      {/* CARD */}

                      <div className="future-card">


                        <div className="future-card-top">

                          <span className="future-icon">
                            {moment.icon}
                          </span>


                          <span className="future-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                        </div>


                        <h2>
                          {moment.title}
                        </h2>


                        <p>
                          {moment.text}
                        </p>


                        <div className="card-heart">
                          ♡
                        </div>

                      </div>

                    </div>

                  ))}

                </section>


                {/* =================================
                    FOREVER SECTION
                ================================= */}

                <section className="forever-section">

                  <div className="forever-glow"></div>


                  <div className="forever-ring">

                    <div className="forever-heart">
                      💍
                    </div>

                  </div>


                  <p className="forever-small">
                    AND IF YOU ASK ME
                  </p>


                  <h2>
                    How Long Do I Want
                    <br />
                    <span>This To Last?</span>
                  </h2>


                  <div className="infinity">
                    ∞
                  </div>


                  <p className="forever-text">
                    Not for a year.
                    <br />
                    Not for a decade.
                    <br />
                    <strong>
                      For as long as we are given.
                    </strong>
                  </p>

                </section>


                {/* =================================
                    PROMISE SECTION
                ================================= */}

                <section className="promise-section">


                  <div className="promise-content">

                    <span className="promise-icon">
                      🤍
                    </span>


                    <p className="promise-label">
                      ONE LITTLE PROMISE
                    </p>


                    <h2>
                      I Choose You
                      <br />
                      <span>Every Time.</span>
                    </h2>


                    <p className="promise-description">
                      Whatever the future looks like,
                      I want to face it with you.
                    </p>


                    <button
                      className="promise-button"
                      onClick={handlePromise}
                    >

                      <span>
                        Read My Promise
                      </span>

                      <b>
                        ❤️
                      </b>

                    </button>

                  </div>

                </section>


                {/* =================================
                    FOOTER
                ================================= */}

                <footer className="future-footer">


                  <div className="footer-heart">
                    ❤️
                  </div>


                  <h3>
                    To Our Tomorrow...
                  </h3>


                  <p>
                    May it always have a little bit of you,
                    a little bit of me,
                    and a whole lot of love.
                  </p>


                  <div className="footer-line">

                    <span></span>

                    ✦

                    <span></span>

                  </div>


                  <small>
                    OUR STORY CONTINUES ❤️
                  </small>


                  {/* NEXT PAGE */}

                  <button
                    className="future-next-button"
                    onClick={handleEndPage}
                  >
                    One More
                    <span>→</span>
                  </button>

                </footer>

              </main>


              {/* =================================
                  PROMISE MODAL
              ================================= */}

              {showPromise && (

                <div
                  className="promise-overlay"
                  onClick={closePromise}
                >


                  <div
                    className="promise-modal"
                    onClick={(e) => e.stopPropagation()}
                  >


                    <button
                      className="close-promise"
                      onClick={closePromise}
                    >
                      ×
                    </button>


                    <div className="modal-heart">
                      ❤️
                    </div>


                    <p className="modal-label">
                      MY PROMISE TO YOU
                    </p>


                    <h2>
                      Whatever Comes Next...
                    </h2>


                    <p className="modal-text">

                      I promise to keep choosing you.

                      <br />
                      <br />

                      On the days when everything feels
                      perfect, and on the days when nothing
                      goes according to plan.

                      <br />
                      <br />

                      I promise to keep making you laugh,
                      keep listening to you, keep supporting
                      your dreams and keep creating little
                      moments that make life beautiful.

                      <br />
                      <br />

                      And when we are old and sitting
                      together remembering our life...

                      <br />
                      <br />

                      <strong>
                        I hope we look at each other and
                        realize we made it all the way.
                      </strong>

                    </p>


                    <div className="modal-signature">
                      Forever yours ❤️
                    </div>


                  </div>

                </div>

              )}

            </div>

    </div>

            
  );
}

export default Ourfuture;
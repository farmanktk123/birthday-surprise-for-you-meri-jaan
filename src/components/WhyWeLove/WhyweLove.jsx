import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Whywelove.css";

function WhyweLove() {

  const navigate = useNavigate();

  // =========================
  // LOVE REASONS
  // =========================

  const reasons = [
    {
      number: "01",
      emoji: "😊",
      title: "Your Beautiful Smile",
      text: "I love your smile because somehow it makes every ordinary moment feel special. Whenever you smile, my whole world feels a little brighter."
    },
    {
      number: "02",
      emoji: "❤️",
      title: "Your Beautiful Heart",
      text: "You have one of the most beautiful hearts I have ever known. The way you care, understand and love makes you incredibly special to me."
    },
    {
      number: "03",
      emoji: "🥰",
      title: "The Way You Care",
      text: "I love the little things you do. The way you ask if I am okay, the way you remember small details, and the way you make me feel important."
    },
    {
      number: "04",
      emoji: "😂",
      title: "You Make Me Laugh",
      text: "Life feels so much better when I am with you. You have this beautiful way of turning boring moments into memories that I never want to forget."
    },
    {
      number: "05",
      emoji: "🌸",
      title: "You Are Simply You",
      text: "I don't love you because you are perfect. I love you because you are uniquely you, and there is nobody in this world who could ever replace you."
    },
    {
      number: "06",
      emoji: "🤗",
      title: "You Feel Like Home",
      text: "With you, I don't have to pretend to be someone else. Being with you feels peaceful, comfortable and exactly where I belong."
    },
    {
      number: "07",
      emoji: "✨",
      title: "You Make Me Better",
      text: "You inspire me to become a better person. Having you beside me makes me want to grow, dream bigger and create a beautiful life together."
    },
    {
      number: "08",
      emoji: "💍",
      title: "You Are My Forever",
      text: "Among billions of people in this world, I am grateful that our paths crossed. I don't just want beautiful moments with you. I want a beautiful lifetime with you."
    }
  ];


  // =========================
  // STATES
  // =========================

  const [currentReason, setCurrentReason] = useState(0);

  const [isChanging, setIsChanging] = useState(false);

  const [showFinal, setShowFinal] = useState(false);

  const [hearts, setHearts] = useState([]);


  const reason = reasons[currentReason];


  // =========================
  // CHANGE REASON
  // =========================

  const changeReason = (newIndex) => {

    if (newIndex === currentReason || isChanging) {
      return;
    }

    setIsChanging(true);

    setTimeout(() => {

      setCurrentReason(newIndex);

      setIsChanging(false);

    }, 400);
  };


  // =========================
  // NEXT
  // =========================

  const nextReason = () => {

    if (isChanging) {
      return;
    }

    if (currentReason === reasons.length - 1) {

      showSurprise();

      return;
    }

    changeReason(currentReason + 1);
  };


  // =========================
  // PREVIOUS
  // =========================

  const previousReason = () => {

    if (currentReason === 0 || isChanging) {
      return;
    }

    changeReason(currentReason - 1);
  };


  // =========================
  // FINAL SURPRISE
  // =========================

  const showSurprise = () => {

    setShowFinal(true);

    createHeartExplosion();
  };


  // =========================
  // HEART EXPLOSION
  // =========================

  const createHeartExplosion = () => {

    const newHearts = [];

    for (let i = 0; i < 60; i++) {

      newHearts.push({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 3,
        size: 15 + Math.random() * 30
      });

    }

    setHearts(newHearts);

    setTimeout(() => {
      setHearts([]);
    }, 6000);
  };


  // =========================
  // RESTART
  // =========================

  const restart = () => {

    setCurrentReason(0);

    setShowFinal(false);

    setHearts([]);
  };


  // =========================
  // EXPLORE FUTURE
  // =========================

  const handleFuture = () => {

    const page = document.querySelector(".love-page");

    if (page) {
      page.classList.add("page-exit");
    }

    setTimeout(() => {

      navigate("/future");

    }, 800);
  };


  return (

    <div className="love-main-container">

        <div className="love-page">

              {/* =========================
                  BACKGROUND GLOW
              ========================= */}

              <div className="love-glow glow-one"></div>

              <div className="love-glow glow-two"></div>

              <div className="love-glow glow-three"></div>


              {/* =========================
                  STARS AROUND CONTAINER
              ========================= */}

              <div className="love-stars">

                {Array.from({ length: 35 }).map((_, index) => (

                  <span
                    key={index}
                    className="love-star"
                    style={{
                      left: `${(index * 37) % 100}%`,
                      top: `${(index * 61) % 100}%`,
                      animationDelay: `${(index % 7) * 0.4}s`
                    }}
                  >
                    ✦
                  </span>

                ))}

              </div>


              {/* =========================
                  FLOATING HEARTS
              ========================= */}

              <div className="floating-hearts">

                {Array.from({ length: 10 }).map((_, index) => (

                  <span
                    key={index}
                    style={{
                      left: `${(index * 29) % 100}%`,
                      animationDelay: `${index * 0.8}s`
                    }}
                  >
                    ❤️
                  </span>

                ))}

              </div>


              {/* =========================
                  HEART EXPLOSION
              ========================= */}

              <div className="heart-explosion">

                {hearts.map((heart) => (

                  <span
                    key={heart.id}
                    className="explosion-heart"
                    style={{
                      left: `${heart.left}%`,
                      animationDelay: `${heart.delay}s`,
                      animationDuration: `${heart.duration}s`,
                      fontSize: `${heart.size}px`
                    }}
                  >
                    ❤️
                  </span>

                ))}

              </div>


              {/* =========================
                  MAIN CONTENT
              ========================= */}

              {!showFinal ? (

                <main className="love-container">


                  {/* HEADER */}

                  <header className="love-header">

                    <p className="small-title">
                      A LITTLE SOMETHING FOR YOU
                    </p>

                    <h1>
                      Why I Love You
                    </h1>

                    <p className="header-text">
                      There are countless reasons...
                      <br />
                      but here are just a few from my heart ❤️
                    </p>

                  </header>


                  {/* PROGRESS */}

                  <div className="love-progress-section">

                    <div className="progress-info">

                      <span>
                        Reason {currentReason + 1}
                      </span>

                      <span>
                        {reasons.length} Reasons
                      </span>

                    </div>


                    <div className="progress-bar">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${((currentReason + 1) / reasons.length) * 100}%`
                        }}
                      ></div>

                    </div>

                  </div>


                  {/* =========================
                      REASON CARD
                  ========================= */}

                  <section
                    className={`reason-card ${
                      isChanging ? "reason-changing" : ""
                    }`}
                  >

                    <div className="reason-number">
                      {reason.number}
                    </div>


                    <div className="reason-emoji">
                      {reason.emoji}
                    </div>


                    <h2>
                      {reason.title}
                    </h2>


                    <p className="reason-text">
                      {reason.text}
                    </p>


                    <div className="heart-line">

                      <span></span>

                      <b>♥</b>

                      <span></span>

                    </div>

                  </section>


                  {/* =========================
                      NAVIGATION
                  ========================= */}

                  <div className="reason-navigation">


                    <button
                      className="reason-button previous"
                      onClick={previousReason}
                      disabled={currentReason === 0}
                      style={{
                        marginTop: "6px",
                        marginBottom: "6px"
                      }}
                    >
                      ← Previous
                    </button>


                    <div className="reason-dots">

                      {reasons.map((_, index) => (

                        <span
                          key={index}
                          className={
                            index === currentReason
                              ? "dot active"
                              : "dot"
                          }
                          onClick={() => changeReason(index)}
                        ></span>

                      ))}

                    </div>


                    <button
                      className="reason-button next"
                      onClick={nextReason}
                    >

                      {currentReason === reasons.length - 1
                        ? "One More Surprise ❤️"
                        : "Next →"}

                    </button>

                  </div>


                  {/* =========================
                      QUOTE
                  ========================= */}

                  <div className="love-quote">

                    <span>“</span>

                    <p>
                      I could write a thousand reasons,
                      and still not explain how much you mean to me.
                    </p>

                    <span>”</span>

                  </div>


                </main>


              ) : (


                /* =========================
                  FINAL SCREEN
                ========================= */

                <main className="final-screen">


                  <div className="final-heart">
                    ❤️
                  </div>


                  <p className="final-small-title">
                    AND THE BIGGEST REASON...
                  </p>


                  <h1>
                    I Love You Because...
                  </h1>


                  <div className="final-message">

                    <p>
                      You are not just someone I love.
                    </p>

                    <p>
                      You are the person who makes
                      my world feel complete.
                    </p>

                    <p>
                      My happiness, my peace,
                      my favorite person...
                    </p>

                    <strong>
                      My Forever. ❤️
                    </strong>

                  </div>


                  <div className="final-signature">

                    <p>
                      Forever Yours ❤️
                    </p>

                  </div>


                  {/* FUTURE BUTTON */}

                  <button
                    className="restart-button"
                    onClick={handleFuture}
                  >
                    Explore Our Future
                    <span>→</span>
                  </button>


                  {/* READ AGAIN */}

                  <button
                    className="small-restart"
                    onClick={restart}
                  >
                    ↻ Read Again
                  </button>


                </main>

              )}

            </div>

    </div>

            
  );
}

export default WhyweLove;
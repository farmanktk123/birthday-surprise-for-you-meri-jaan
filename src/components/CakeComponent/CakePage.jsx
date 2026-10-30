import React, { useEffect, useState } from "react";
import "./CakePage.css";
import { useNavigate } from "react-router-dom";


function CakePage() {
  const Navigate = useNavigate();

  const [showStars, setShowStars] = useState(false);
  const [state, setState] = useState("");

  useEffect(() => {

    // Page load hone par stars animation
    setShowStars(true);

  }, []);


  function HandleGift(answer)
  {
    setState(answer)
  }

  if(state === "gift")
  {
    return Navigate("/gift")
  }

  function handleNext() {

    setShowStars(false);

    // Smooth transition ke baad next page
    setTimeout(() => {
      window.location.href = "/memories";
    }, 700);

  }


  return (
    <main className="cake-page">

      {/* =================================
          Background Stars
      ================================= */}

      <div className="background-stars">

        {Array.from({ length: 45 }).map((_, index) => (

          <span
            key={index}
            className="background-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />

        ))}

      </div>


      {/* =================================
          Top Heading
      ================================= */}

      <section className="cake-heading">

        <p className="cake-eyebrow">
          Make a wish 🌙
        </p>

        <h1>
          Your Birthday Cake 🎂
        </h1>

        <p className="cake-subtitle">
          A little slice of happiness, just for you.
        </p>

      </section>


      {/* =================================
          Cake Scene
      ================================= */}

      <div className="cake-scene">


        {/* =================================
            Hanging Lamp
        ================================= */}

        <div className="birthday-lamp">

          <div className="lamp-wire"></div>

          <div className="lamp-light"></div>

          <div className="lamp-shade"></div>

        </div>


        {/* =================================
            Cake
        ================================= */}

        <div className="cake">


          {/* Cake Top */}

          <div className="cake-top">


            {/* Candle 1 */}

            <div className="candle candle-one">

              <span className="flame"></span>

            </div>


            {/* Candle 2 */}

            <div className="candle candle-two">

              <span className="flame"></span>

            </div>


            {/* Candle 3 */}

            <div className="candle candle-three">

              <span className="flame"></span>

            </div>

          </div>


          {/* Frosting */}

          <div className="frosting">

            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>


          {/* Upper Cake Layer */}

          <div className="cake-layer cake-layer-one">

            <div className="cake-decoration">

              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span>●</span>

            </div>

          </div>


          {/* Cream Layer */}

          <div className="cream-layer"></div>


          {/* Lower Cake Layer */}

          <div className="cake-layer cake-layer-two">

            <div className="cake-decoration">

              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span>●</span>

            </div>

          </div>


          {/* Cake Base */}

          <div className="cake-base"></div>

        </div>


        {/* =================================
            Cake Slices
        ================================= */}

        <div className="cake-slice slice-one">
          🍰
        </div>

        <div className="cake-slice slice-two">
          🍰
        </div>

        <div className="cake-slice slice-three">
          🍰
        </div>


        {/* =================================
            Table Shadow
        ================================= */}

        <div className="cake-shadow"></div>

      </div>


      {/* =================================
          Bottom Button
      ================================= */}

      <button
        className="cake-next-btn"
        onClick={() => HandleGift("gift")}
      >
        Next: Your Gift 💕
      </button>


      {/* =================================
          Click Star Transition
      ================================= */}

      {!showStars && (

        <div className="star-transition">

          {Array.from({ length: 70 }).map((_, index) => (

            <span
              key={index}
              className="transition-star"
              style={{
                "--x": `${(Math.random() - 0.5) * 120}vw`,
                "--y": `${(Math.random() - 0.5) * 120}vh`,
                animationDelay: `${Math.random() * 0.15}s`,
              }}
            />

          ))}

        </div>

      )}

    </main>
  );
}

export default CakePage;

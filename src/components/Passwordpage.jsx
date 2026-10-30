import React, { useState } from 'react';
import './Passwordpage.css';
import CartoonImg from '../assets/download.jfif';
import { useNavigate } from 'react-router-dom';

function Passwordpage() {

  const navigate = useNavigate();

  const [pin, setPin] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  const password = "2917";
  const pswdLenght = 4;


  // =========================
  // ADD NUMBER
  // =========================

  function HandlePIn(num) {

    if (pin.length < pswdLenght && !isSubmitting) {
      setPin(pin + num);
    }

  }


  // =========================
  // REMOVE NUMBER
  // =========================

  function RemoveHandle() {

    if (!isSubmitting) {
      setPin(pin.slice(0, -1));
    }

  }


  // =========================
  // UNLOCK BUTTON
  // =========================

  function Handlebtn() {

    // Password length check
    if (pin.length !== pswdLenght) {

      setIsSubmitting(true);

      setTimeout(() => {

        setStatus("Please enter 4 digit password");

        setPin("");

        setIsSubmitting(false);

      }, 1500);

      return;
    }


    setIsSubmitting(true);


    // Checking animation
    setTimeout(() => {

      if (pin === password) {

        // Correct password
        setStatus("correct");

      } else {

        // Wrong password
        setStatus("incorrect");

      }

      // Start page switching animation
      setIsSwitching(true);


      // Wait for animation to finish
      setTimeout(() => {

        if (pin === password) {

          navigate("/match");

        } else {

          navigate("/error");

        }

      }, 700);


    }, 1500);

  }


  return (

    <div
      className={`main-div ${
        isSwitching ? "page-switch page-exit" : ""
      }`}
    >

      <div className="password-container">


        {/* IMAGE */}

        <div className="images">

          <img src={CartoonImg} alt="" />

          <p>Draw a Password</p>

        </div>


        {/* PIN DISPLAY */}

        <div className="pin-display">

          {Array.from({ length: pswdLenght }).map((_, index) => (

            <span
              key={index}
              className={`pin-dot ${
                index < pin.length ? "filled" : ""
              }`}
            ></span>

          ))}

        </div>


        {/* ERROR */}

        {status === "Please enter 4 digit password" && (

          <p className="error-message">
            Please enter 4 digit password
          </p>

        )}


        {/* KEYPAD */}

        <div className="pswd-div">

          <span onClick={() => HandlePIn(1)}>1</span>
          <span onClick={() => HandlePIn(2)}>2</span>
          <span onClick={() => HandlePIn(3)}>3</span>

          <span onClick={() => HandlePIn(4)}>4</span>
          <span onClick={() => HandlePIn(5)}>5</span>
          <span onClick={() => HandlePIn(6)}>6</span>

          <span onClick={() => HandlePIn(7)}>7</span>
          <span onClick={() => HandlePIn(8)}>8</span>
          <span onClick={() => HandlePIn(9)}>9</span>

          <span onClick={() => HandlePIn(0)}>0</span>

          <span onClick={RemoveHandle}>
            🔙
          </span>

        </div>


        {/* UNLOCK BUTTON */}

        <button
          onClick={Handlebtn}
          id="unlockbtn"
          disabled={isSubmitting}
        >

          {isSubmitting
            ? "Checking..."
            : "Unlock"}

        </button>


      </div>

    </div>

  );

}

export default Passwordpage;
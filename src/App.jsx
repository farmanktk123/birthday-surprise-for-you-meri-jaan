import { useState, useEffect } from 'react';

import './App.css'

import Passwordpage from './components/Passwordpage';
import { useNavigate } from 'react-router-dom';
function App() {

  const [heading, setHeading] = useState("");


  const text = "Happy Birthday Aiman Janiii ❤️";

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setHeading(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(typing);
      }
    }, 110);

    return () => clearInterval(typing);
  }, []);


  const navigate = useNavigate();
  function setShowPassword() {
      navigate("/passwordpage")
  }

  

  return (
    <>
      <div className='heart-container'>

        <h1 className="birthday-heading">
          {heading}
        </h1>

          <button
            className="heartpage"
            onClick={setShowPassword}
          >
          ❤️
        </button> <br/>
        <br/>
        <div>
          <p style={{font: "22px", color: "#c0c0c0"}}>Someone Very Special Has A Birthday Today...</p>

          <p>Click The Heart (❤️) To Celebrate 🎁 Your Special Day 😍🥰❤️</p>
        </div>
        
      
    </div>
    </>
  )
}

export default App

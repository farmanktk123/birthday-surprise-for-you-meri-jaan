import React, { useState } from 'react';
import './Errorpswd.css';
import BD from '../assets/BD.jpeg';
import Passwordpage from './Passwordpage';

function Pswderror() {
  const [TryButton, setTryButton] = useState("");

  function HandleTryButton (answer)
  {
    setTryButton(answer)
  }

  if(TryButton == "tryagain")
  {
    return <Passwordpage />
  }

  return (
    <div className='errorpswd-div'>

      <div className="content">
        <span id='topPara'>Wrong Password </span>

        <img src={BD} alt="Charachters Images" /> <br />

        <button id='trybutton' onClick={() =>HandleTryButton("tryagain")}>Try again...</button>
      </div>
       
    </div>
  )
}

export default Pswderror

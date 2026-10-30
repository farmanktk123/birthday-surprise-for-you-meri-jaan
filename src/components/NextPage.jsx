import React, { useEffect, useRef, useState } from 'react';
import './NextPage.css';

import { useNavigate } from 'react-router-dom';

const paragraphs = [

  `🌸 Okayyy... Ab thora sa baat karte hain us Beautiful Girl ki... 😍❤️`,
  `Jiski ek smile 😊 meri poori duniya ko bright kar deti hai ✨❤️`,

  `Honestly... I don't know ke tum itni beautiful kaise ho... 🥺🌸`,

  `Tum jab smile karti ho na... 🥹❤️`,
  `to lagta hai jaise duniya ki saari tension ek second ke liye khatam ho gayi ho. ❤️`,

  `Tumhari beauty sirf tumhare face tak limited nahi hai... 🌸`,

  `Tumhara beautiful heart ❤️ aur beautiful soul hi tumhein itna special banata hai. 🥺❤️`,
  `Tumhari simplicity 😌, tumhari cute si baatein 😂, tumhara gussa 😤...`,

  `Sab kuch hi mujhe bohot zyada pasand hai. ❤️`,

  `You are not just beautiful from outside... 🌸`,

  `You are beautiful from your heart, your thoughts and your soul. ❤️`,
  `Aur haan... tumhari woh cute si smile 😍`,

  `On your special day... 🎂🎉 I just want to remind you that you are genuinely one of the most precious people in my life. ❤️`,

  `May Allah always keep you happy 🤲❤️`,

  `May your face always have that beautiful smile 😊 and may your heart always stay peaceful. 🌸`,

  `I pray that whenever life gets difficult... you always find a reason to smile again. 😊🌸`,

  `Because you deserve all the happiness in this world... 🌍❤️`,

  `You deserve to be loved, respected, cared for and appreciated every single day. 🥺❤️`,

  `And today... on your birthday 🎂 I just want to say... ❤️`,

  `HAPPIEST BIRTHDAYYYY TO THE MOST BEAUTIFUL GIRL ❤️👩‍🦰`,

  `May your birthday be as beautiful as your smile, as sweet as your heart, and as special as YOU are to me. 🎂❤️🥰`,

  `And never forget... ❤️ You are beautiful. You are special. You are precious.`,

  `And you are deeply loved. 🥺❤️`,

  `Once again... 🎂🎉 Happiest Birthdayyyy My Beautiful Wife ❤️😍🌸`,
  `I Love You Sooooo Muchhhh ❤️🥺😍 Today... Tomorrow... And Forever. 🌸❤️`

];


function NextPage() {
  const navigate = useNavigate();

  const [currentPara, setCurrentPara] = useState(0);
  const [doneParas, setDoneParas] = useState([]);

  const typingRef = useRef(null);
  const charIndexRef = useRef(0);

  useEffect(() => {

    if (currentPara >= paragraphs.length) return;

    const characters = Array.from(paragraphs[currentPara]);

    charIndexRef.current = 0;

    let timerId;

    function typeNext() {

      charIndexRef.current += 1;

      if (typingRef.current) {

        typingRef.current.textContent =
          characters
            .slice(0, charIndexRef.current)
            .join('');

      }

      if (charIndexRef.current < characters.length) {

        timerId = setTimeout(typeNext, 20);

      } else {

        timerId = setTimeout(() => {

          setDoneParas(prev => [
            ...prev,
            paragraphs[currentPara]
          ]);

          setCurrentPara(prev => prev + 1);

        }, 700);
      }
    }

    timerId = setTimeout(typeNext, 50);

    return () => clearTimeout(timerId);

  }, [currentPara]);

  const [nextstate, setNextstate] = useState("");

  function HandleNext (answer)
  {
    setNextstate(answer);
  }

  if(nextstate === "images")
  {
    return navigate("/gallery");
  }


  return (

    <main className="next-main-container">

        <div className="next-text">

            <h2 className="next-heading">
            A Few Words<br />
            For My Beautiful Wife ❤️
            </h2>


                {doneParas.map((text, index) => (

                <p
                    key={index}
                    className={`completed-next-para ${
                    index === 17 ? 'birthday-wish' : ''
                    }`}
                >
                    {text}
                </p>

                ))}


                {currentPara < paragraphs.length && (

                <p
                    className={`next-typewriter ${
                    currentPara === 17 ? 'birthday-wish' : ''
                    }`}
                >

                    <span ref={typingRef}></span>

                    <span className="next-cursor"></span>

                </p>

                )}

                <button 
                id='again-celebrate' 
                onClick={() => HandleNext("images")}
                >Next ➡</button>

      </div>

    </main>
  );
}

export default NextPage;

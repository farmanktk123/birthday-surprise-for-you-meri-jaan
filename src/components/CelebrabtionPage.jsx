import React, { useEffect, useState } from "react";
import "./CelebrationPage.css";
import { useNavigate } from "react-router-dom";

const paragraphs = [
  `So This is the Day when the Most Beautiful Soul 🌸 was Born...`,

  `The girl who slowly became my Sista.. Hubby.. Mumma.. Bachecha.. And pta nhi Kya Kya 😂❤️`,

  `❤️ It simply means... You Are My Everything 😍🥰❤️ And honestly,`,

  `meri life tumhare bina imagine karna bhi mushkil hai. 🥺`,

  `Happiesttt Birthdayyyy To the Best Wife 👩‍🦰 in the Whole Entire Earth 🌍❤️`,

  `The most beautiful girl with the most beautiful heart. 🌸`,

  `I adore you a lot in so many ways... 🌸 Tumhari smile 😊, tumhari cute si baatein`,

  `😂 tumhara gussa 😤... honestly, everything about you is special to me. ❤️😍`,

  `And please... Keep Smiling 😊 as You always do. ❤️ Because tumhari smile 😍`,

  `is honestly one of my favourite things in this whole world. 🌍❤️`,

  `Thank you sooo muchhh 🥺❤️ For all the Good Advice 😊,`,

  `Love ♡, Care 🌸 and all those crazy little moments 😛😂`,

  `that made my life more beautiful.`,

  `I hope that your special day today touches your ❤️`,

  `Heart in the same way that you've touched mine over all these beautiful months. 😘😍❤️`,

  `Ye... itne Din hogye honge hamari friendship ko? 😂 Kitne hogye? 🤔`,

  `Time ka pata hi nahi chala... because every moment with you feels so special. 🌸❤️`,

  `Meri Cutieeee... Aise Sad Sad Mt rha kro 😔 Happy Happy 😁 Raha Kariye jii...`,

  `Because you look the most beautiful when you smile. 🥰❤️`,

  `Chahe kuchh bhi ho Jaye... pr smile 😊 krna nii chhodna,`,

  `bcz aapki smile 😍 me meri Jaan ♡ basti h. 😍❤️🤣`,

  `Aaj ek Baat Kahunga... ❤️ We Only Have One Life ♡...`,

  `and this life is too precious to spend it being sad. 🌸`,

  `It's Your Responsibility To Fight For Your Happiness! 😁❤️ Nobody And Nothing 🤷‍♀️`,

  `will do that for you... so always choose yourself, your peace and your happiness. 🌸`,

  `You Have to Fight For Yourself! 🌸❤️ Chahe life kitni bhi difficult ho jaye...`,

  `never forget how strong, beautiful and precious you are. 🥺`,

  `So... Ye itti si life h na... 🥺 Isme bhi tum Sad Mt Raha Karo 😔 Please zyada se`,

  `zyada smile karo, enjoy karo aur apni beautiful life ko beautifully jiyo. ❤️🌸`,

  `Please... Jo Hota h Use Ignore kro! Hehe 😁❤️ Har cheez ko dil pe lene ki zaroorat`,

  `nahi hoti... sometimes just smile, breathe and move on. 🌸`,

  `And... Love You Sooooo Much!! ❤️🥺 Keep Smiling ✌️😁 Keep Shining ✨`,

  `Enjoy Your Day 😁♡ and never let that beautiful smile disappear. 😍🌸`,

  `I love you forever. ❤️🌸😍`,

  `Today... Tomorrow... And every beautiful day that comes after. 🥺❤️`,

  `Happiest Birthdayyyy My Beautiful Wife! 🎂👩‍🦰❤️`
];

function CelebrabtionPage() {

  const navigate = useNavigate();

  const [currentPara, setCurrentPara] = useState(0);
  const [doneParas, setDoneParas] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);


  // =========================================
  // TYPEWRITER EFFECT
  // =========================================

  useEffect(() => {

    if (currentPara >= paragraphs.length) {
      return;
    }

    const text = paragraphs[currentPara];

    const characters = Array.from(text);

    let index = 0;
    let typingTimer;
    let nextTimer;


    const typeCharacter = () => {

      if (index < characters.length) {

        setTypedText(prev => {
          return prev + characters[index];
        });

        index++;

        typingTimer = setTimeout(
          typeCharacter,
          35
        );

      } else {

        // Paragraph complete
        nextTimer = setTimeout(() => {

          setDoneParas(prev => [
            ...prev,
            text
          ]);

          setTypedText("");

          setCurrentPara(prev => prev + 1);

        }, 1000);

      }

    };


    // Small delay before each paragraph
    typingTimer = setTimeout(
      typeCharacter,
      100
    );


    return () => {

      clearTimeout(typingTimer);
      clearTimeout(nextTimer);

    };

  }, [currentPara]);


  // =========================================
  // NEXT PAGE
  // =========================================

  const HandleNext = () => {

    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    setTimeout(() => {

      navigate("/textmessage");

    }, 1000);

  };


  return (

    <main
      className={`celebration-main-container ${
        isTransitioning
          ? "celebration-exit"
          : ""
      }`}
    >

      {/* =====================================
          STAR TRANSITION
      ===================================== */}

      {isTransitioning && (

        <div className="star-transition">

          {Array.from({ length: 70 }).map((_, index) => (

            <span
              key={index}
              className="transition-star"
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 61) % 100}%`,
                animationDelay: `${(index % 10) * 0.03}s`
              }}
            >
              ✦
            </span>

          ))}

          <div className="transition-glow"></div>

        </div>

      )}


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="celebration-text">

        <h2 className="celebration-heading">
          Happy Birthday Meri
          <br />
          Cutie 😍❤️
        </h2>


        {/* Completed paragraphs */}

        {doneParas.map((text, index) => (

          <p
            key={index}
            className="completed-celeb-para"
          >
            {text}
          </p>

        ))}


        {/* Currently typing paragraph */}

        {currentPara < paragraphs.length && (

          <p className="typewriter">

            {Array.from(typedText).map(
              (character, index) => (

                <span
                  key={index}
                  className="typing-character"
                >
                  {character}
                </span>

              )
            )}

            <span className="cursor"></span>

          </p>

        )}


        {/* Next button */}

        <button
          id="again-celebrate"
          onClick={HandleNext}
          disabled={isTransitioning}
        >

          {isTransitioning
            ? "✨ Wait..."
            : "Next ➡"
          }

        </button>

      </div>

    </main>

  );
}

export default CelebrabtionPage;
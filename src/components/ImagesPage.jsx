import React, { useState, useRef } from 'react';
import './ImagePage.css';

import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p6 from '../assets/p6.jpeg';
import p16 from '../assets/p16.jpeg';
import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.jpeg';
import p10 from '../assets/p10.jpeg';

import { useNavigate } from 'react-router-dom';

function ImagesPage() {
    const Navigate = useNavigate();

    const [state, setState] = useState("");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const transitionTimer = useRef(null);


    function HandleNext() {

        if (isTransitioning) return;

        setIsTransitioning(true);

        transitionTimer.current = setTimeout(() => {
            setState("new");
        }, 1100);
    }


    if (state === "new") {
        return Navigate("/memory");
    }


    const images = [
        {
            image: p1,
            alt: "image1",
            text: "Every picture holds a beautiful memory ❤️"
        },
        {
            image: p2,
            alt: "image2",
            text: "One moment, countless feelings, forever special ❤️"
        },
        {
            image: p3,
            alt: "image3",
            text: "With you, every moment feels magical ❤️"
        },
        {
            image: p4,
            alt: "image4",
            text: "This smile will always be my favourite 😍"
        },
        {
            image: p16,
            alt: "image5",
            text: "A beautiful moment with my beautiful person 🌸"
        },
        {
            image: p6,
            alt: "image6",
            text: "Some memories are simply impossible to forget ❤️"
        },
        {
            image: p10,
            alt: "image7",
            text: "Every memory with you feels like a dream 💕"
        },
        {
            image: p8,
            alt: "image8",
            text: "A thousand memories, one beautiful story ❤️"
        },
        {
            image: p9,
            alt: "image9",
            text: "Forever grateful for these precious moments 🌷"
        }
    ];


    return (
        <div className='main-images-container'>

            <main className="images-page">

            {/* =================================
                ⭐ STAR TRANSITION
            ================================= */}

            {isTransitioning && (
                <div className="image-star-transition">

                    {Array.from({ length: 85 }).map((_, index) => (
                        <span
                            key={index}
                            className="image-transition-star"
                            style={{
                                left: `${(index * 31) % 100}%`,
                                top: `${(index * 53) % 100}%`,
                                animationDelay: `${(index % 12) * 0.035}s`
                            }}
                        >
                            ✦
                        </span>
                    ))}

                    <div className="image-transition-glow"></div>

                </div>
            )}


            {/* =================================
                🌌 PAGE CONTENT
            ================================= */}

            <div
                className={`images-content ${
                    isTransitioning ? "images-content-exit" : ""
                }`}
            >

                <div className="images-heading">
                    <p>Our Beautiful Memories 📸</p>
                    <h1>Little Moments, Big Memories ❤️</h1>
                </div>


                <div className="content-container">

                    {images.map((item, index) => (
                        <div className="card1" key={index}>

                            <img
                                src={item.image}
                                alt={item.alt}
                                className="cardimage"
                            />

                            <p>{item.text}</p>

                        </div>
                    ))}

                </div>


                <button
                    id="image-next-btn"
                    onClick={HandleNext}
                    disabled={isTransitioning}
                >
                    {isTransitioning
                        ? "Opening ✨"
                        : "Agay Jao Yarr ❤️"
                    }
                </button>

            </div>

            </main>

        </div>
          
    );
}

export default ImagesPage;
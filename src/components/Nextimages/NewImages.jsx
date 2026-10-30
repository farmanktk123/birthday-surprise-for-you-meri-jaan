import React, { useEffect, useRef, useState } from 'react';
import './NewImages.css';

import p6 from '../../assets/p6.jpeg';
import p9 from '../../assets/p9.jpeg';
import p14 from '../../assets/p14.jpeg';
import p23 from '../../assets/p23.jpeg';
import p18 from '../../assets/p18.jpeg';
import p19 from '../../assets/p19.jpeg';
import p20 from '../../assets/p20.jpeg';
import p21 from '../../assets/p21.jpeg';
import p7 from '../../assets/p7.jpeg';
import p5 from '../../assets/p5.jpeg';
import p3 from '../../assets/p3.jpeg';

import { useNavigate } from 'react-router-dom';

function NewImages() {

    const Navigate = useNavigate();

    const [state, setState] = useState("");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const transitionTimer = useRef(null);

    useEffect(() => {
        return () => {
            if (transitionTimer.current) {
                clearTimeout(transitionTimer.current);
            }
        };
    }, []);

    function HandleNew() {
        if (isTransitioning) return;

        setIsTransitioning(true);

        transitionTimer.current = setTimeout(() => {
            setState("new");
        }, 1300);
    }

    if (state === "new") {
        return Navigate("/cake");
    }

    return (
            <div className='new-images-container'>


                    <main className="new-images-page">

                    {/* ⭐ STAR TRANSITION */}
                    {isTransitioning && (
                        <div className="new-star-transition">

                            {Array.from({ length: 85 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="new-transition-star"
                                    style={{
                                        left: `${(index * 31) % 100}%`,
                                        top: `${(index * 53) % 100}%`,
                                        animationDelay: `${(index % 12) * 0.035}s`
                                    }}
                                >
                                    ✦
                                </span>
                            ))}

                            <div className="new-transition-glow"></div>
                        </div>
                    )}

                    {/* 🌸 PAGE CONTENT */}
                    <div
                        className={`new-images-content ${
                            isTransitioning ? "new-content-exit" : ""
                        }`}
                    >

                        <div className="new-images-heading">
                            <p>More Beautiful Memories 🥹❤️</p>
                            <h1>Memories That Stay Forever 🌸</h1>
                        </div>

                        <div className="grid-container">

                            <div className="cards">
                                <img src={p5} alt="Image1" />
                                <p>
                                    Some moments are more than just pictures; they become
                                    little pieces of our heart. Whenever I look at this one,
                                    I don't just see a memory—I feel all those beautiful
                                    emotions again. I'm genuinely grateful that this moment
                                    became a part of our story. ❤️
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p20} alt="Image2" />
                                <p>
                                    There are people who make ordinary moments feel special
                                    without even trying. Your presence has always had that
                                    magic. I hope you always know how deeply you are valued,
                                    cared for, and appreciated—not just today, but every
                                    single day. 🥹❤️
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p19} alt="Image3" />
                                <p>
                                    If I could keep one thing forever, it wouldn't be a
                                    picture—it would be the feeling behind it. The happiness,
                                    the smiles, and the warmth of being together. Some memories
                                    quietly become precious parts of our heart, and this is one
                                    of them. ❤️
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p21} alt="Image4" />
                                <p>
                                    Your smile has a way of making everything feel a little
                                    lighter. Whenever you're happy, somehow it makes the world
                                    around you feel happier too. I just hope life always gives
                                    you countless reasons to smile, because you truly deserve
                                    every beautiful moment. 🌸❤️
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p3} alt="Image5" />
                                <p>
                                    I may not always have the perfect words to explain how
                                    much someone means to me, but I hope my care speaks for
                                    itself. I want you to know that your happiness matters,
                                    your feelings matter, and you will always have someone
                                    silently wishing the best for you. 🥺❤️
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p14} alt="Image6" />
                                <p>
                                    Some memories don't need a special occasion to become
                                    unforgettable. They simply stay with us because of the
                                    person who was beside us when they happened. This picture
                                    will always remind me of a beautiful moment that I would
                                    never want to lose. ❤️✨
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p23} alt="Image7" />
                                <p>
                                    Life keeps moving, moments pass, and pictures become
                                    memories—but some feelings never really fade. Looking at
                                    this reminds me how lucky I feel to have shared these
                                    beautiful moments with you. I hope we continue creating
                                    many more memories worth keeping forever. ❤️
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p7} alt="Image8" />
                                <p>
                                    You are one of those beautiful parts of life that make
                                    simple days feel meaningful. It's not always about big
                                    moments; sometimes it's just a smile, a conversation, or
                                    being there for each other. And honestly, those little
                                    things are the ones I treasure the most. 🫶❤️
                                </p>
                            </div>

                            <div className="cards">
                                <img src={p18} alt="Image9" />
                                <p>
                                    No matter how much time passes, I hope you never forget
                                    how special you are. You deserve kindness when you're tired,
                                    support when things get difficult, and someone who genuinely
                                    cares about your happiness. This memory is just another
                                    little reminder of how precious you are. ❤️
                                </p>
                            </div>

                        </div>

                        <button
                            id="newbtn"
                            onClick={HandleNew}
                            disabled={isTransitioning}
                        >
                            {isTransitioning
                                ? "Opening Cake ✨"
                                : "Torha Aur Agay ❤️"
                            }
                        </button>

                    </div>
                </main>

            </div>
                
    );
}

export default NewImages;
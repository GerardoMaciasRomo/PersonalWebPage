import React, { useState, useEffect } from "react";

import SocialButton from '../components/buttonsocial';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import miFoto from "../assets/Yo2022.jpg";

import { useNavigate } from 'react-router-dom';

function Home() {

  const [rotateZ, setRotateZ] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotateZ(scrollY / 10); // ajusta el divisor para controlar velocidad
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { title: "Hobbies & Interests", color: "bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600", url: "/hobbies" },
    { title: "Professional Experience", color: "bg-gradient-to-br from-cyan-600 via-cyan-800 to-cyan-900", url: "/Professional" },
    { title: "Academic Projects", color: "bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600", url: "/Academic" },
  ];

  return (
    <div className="App flex flex-col items-center min-h-screen bg-gradient-to-br from-black via-zinc-700 to-gray-800 text-white font-[Times_New_Roman] px-4 pb-12">

      <h1 className="mt-24 mb-4 text-5xl font-bold text-center text-transparent sm:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-700 bg-clip-text">
        Hi, I'm Gerardo
      </h1>

      <p className="max-w-3xl mb-8 text-xl text-center text-gray-100 sm:text-2xl lg:text-3xl">
        Artificial Intelligence Engineer&nbsp;|&nbsp;Fullstack Developer&nbsp;|&nbsp;Automation Engineer
      </p>

      <div className="flex gap-5 mt-2">
        <SocialButton icon={FaGithub} url="https://github.com/GerardoMaciasRomo" />
        <SocialButton icon={FaLinkedin} url="https://www.linkedin.com/in/gerardo-macías-romo-572235209/" />
      </div>

      <div className="mt-16 mb-6">
        <img
          src={miFoto}
          alt="Gerardo"
          className="object-cover transition-transform shadow-2xl w-52 h-52 sm:w-60 sm:h-60 rounded-2xl opacity-80 duration-700 hover:opacity-100 hover:scale-110"
          style={{
            transform: `rotateZ(${rotateZ}deg)`,
            transformStyle: "preserve-3d",
          }}
        />
      </div>

      <div className="max-w-2xl px-4 mt-12 text-justify">
        <p className="text-lg leading-relaxed text-gray-200 sm:text-xl">
          I'm a passionate Artificial Intelligence Engineer and Fullstack Developer with experience in building scalable web applications and implementing machine learning solutions. I love exploring new technologies and continuously improving my skills.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-gray-200 sm:text-xl">
          Feel free to connect with me on GitHub and LinkedIn to see my projects and professional journey.
        </p>
      </div>

      <div className="relative inline-flex flex-row items-center justify-center w-full max-w-3xl gap-4 px-4 mt-16 group">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-700 rounded-2xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <div className="relative flex flex-col w-full gap-4 sm:flex-row">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => navigate(card.url)}
                className={`transition-all duration-300 flex items-center justify-center text-center text-zinc-100 text-xl sm:text-2xl font-semibold h-44 rounded-2xl shadow-lg cursor-pointer px-4
                  ${cards[index].color}
                  ${isActive ? "flex-[2] scale-[1.02]" : "flex-[1]"}
                `}
              >
                {card.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-2xl px-4 mt-12 text-justify">
        <p className="mt-6 text-sm text-center text-gray-400">
          © 2026 Gerardo Macías Romo. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Home;
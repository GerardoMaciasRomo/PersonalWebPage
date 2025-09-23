import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

import SocialButton from './components/buttonsocial';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import miFoto from "./assets/Yo2022.jpg";

function App() {
 
  const [rotateZ, setRotateZ] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setRotateZ(scrollY / 10); // ajusta el divisor para controlar velocidad
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
    const cards = [
    { title: "Hobbies & Interests", color: "bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600" },
    { title: "Professional Experience", color: "bg-gradient-to-br from-cyan-600 via-cyan-800 to-cyan-900" },
    { title: "Academic Projects", color: "bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600" },
  ];
  
  return (<div className="App flex flex-col items-center bg-gradient-to-br from-black via-zinc-700 to-gray-800 text-white font-[Times_New_Roman] ">
    
      <h1 className="text-4xl font-bold text-cyan-700 mt-35 mb-10">Hi, I'm Gerardo</h1>
      <p className="text-lg text-gray-100 text-3xl mb-6">Artificial Intelligence Engineer | Fullstack Developer</p>
      <div className="flex gap-4 mt-6">
        <SocialButton icon={FaGithub} url="https://github.com/GerardoMaciasRomo" />
        <SocialButton icon={FaLinkedin} url="https://www.linkedin.com/in/gerardo-macías-romo-572235209/" />
      </div> 
      
      <div className="mt-18 mb-6">
        <img
          src={miFoto}
          alt="Gerardo"
          className="w-48 h-48 rounded-lg shadow-xl opacity-70 transition-transform duration-800 hover:opacity-100 hover:scale-125"
          style={{
          transform: `rotateZ(${rotateZ}deg)`,
          transformStyle: "preserve-3d",
          }}

        />
      </div>
      <div className="mt-12 max-w-2xl text-justify text-xl px-4">
        <p className="text-gray-200 ">
          I'm a passionate Artificial Intelligence Engineer and Fullstack Developer with experience in building scalable web applications and implementing machine learning solutions. I love exploring new technologies and continuously improving my skills.
        </p>
        <p className="text-gray-200 mt-4">
          Feel free to connect with me on GitHub and LinkedIn to see my projects and professional journey.
        </p>
      </div>
                <div className="flex flex-row justify-center items-center gap-4 mt-12 w-full max-w-2xl px-4">
        {cards.map((card, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`transition-all duration-300 flex items-center justify-center text-zinc-100 text-xl h-40 rounded-xl shadow-lg cursor-pointer 
                ${cards[index].color} 
                ${isActive ? "flex-[2]" : "flex-[1]"} 
              `}
            >
              {card.title}
            </div>
          );
        })}
      </div>




      <div className="mt-8 max-w-2xl text-justify px-4">

        <p className="text-gray-400 text-center mt-6 text-sm">
          © 2024 Gerardo Macías Romo. All rights reserved.
        </p>

        </div>
    </div> 
    
    
             
  );
}

export default App;

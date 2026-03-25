import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const name = "Rostyslav Yanikin";
 

  const imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80";
  const imageAlt = "Гірське озеро на світанку";
 

  const favoriteLink = {
    назва_сайту: "Google",
    url: "https://www.google.com/",
  };
 

  const numA = 42;
  const numB = 58;
  const sum = numA + numB;
 

  const colors = ["Червоний", "Синій", "Зелений"];
 
  return (
    <div>

      <h1>{name}</h1>
 

      <p>Ласкаво просимо до нашого сайту!</p>
 

      <img src={imageUrl} alt={imageAlt} />
 
 
      <a href={favoriteLink.url}>{favoriteLink.назва_сайту}</a>
 
     
      <p>{numA} + {numB} = {sum}</p>
 
   
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App

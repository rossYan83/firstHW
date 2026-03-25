import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const name = "Rostyslav Yanikin";
 
  // 4. Дані зображення
  const imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80";
  const imageAlt = "Гірське озеро на світанку";
 
  // 5. Об'єкт з посиланням
  const favoriteLink = {
    назва_сайту: "Google",
    url: "https://www.google.com/",
  };
 
  // 7. Дві змінні та їхня сума
  const numA = 42;
  const numB = 58;
  const sum = numA + numB;
 
  // 8. Масив кольорів
  const colors = ["Червоний", "Синій", "Зелений"];
 
  return (
    <div>
      {/* 2. Ім'я в h1 */}
      <h1>{name}</h1>
 
      {/* 3. Вітальний абзац */}
      <p>Ласкаво просимо до нашого сайту!</p>
 
      {/* 4. Зображення */}
      <img src={imageUrl} alt={imageAlt} />
 
      {/* 6. Посилання з об'єкта */}
      <a href={favoriteLink.url}>{favoriteLink.назва_сайту}</a>
 
      {/* 7. Результат суми */}
      <p>{numA} + {numB} = {sum}</p>
 
      {/* 9. Список кольорів через map */}
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App

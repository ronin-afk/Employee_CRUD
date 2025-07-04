import React, { useEffect, useState } from 'react';

const icons = [
    '/assets/react.svg',
    '/assets/springboot.svg',
    '/assets/java.png',
    '/assets/mysql.svg'
];

const generateDrop = () => ({
  id: Math.random(),
  left: Math.random() * 100 + 'vw',
  delay: Math.random() * 5 + 's',
  duration: 5 + Math.random() * 5 + 's',
  icon: icons[Math.floor(Math.random() * icons.length)]
});

const Rain = ({ count = 23 }) => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const newDrops = Array.from({ length: count }, generateDrop);
    setDrops(newDrops);
  }, [count]);

  return (
    <div className="rain-container">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration
          }}
        >
          <img src={drop.icon} alt="tech" />
        </div>
      ))}
    </div>
  );
};

export default Rain;

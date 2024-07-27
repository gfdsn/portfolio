import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/home.module.css';

function App() {

  const [animation, setAnimation] = useState('fade_up')
  const welcomeRef = useRef<HTMLHeadingElement>(null);
    
  useEffect(() => { 
    setTimeout(() => {
      setAnimation('fade_down')
    }, 5000);
  }, []);

  return (
    <div className={styles.welcome_animation}>
      <h2 ref={welcomeRef} className={styles[animation]}>Welcome</h2>
    </div>
  ); 
}

export default App;
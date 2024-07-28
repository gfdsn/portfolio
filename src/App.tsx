import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/home.module.css';

function App() {

  const [welcomeAnimation, setWelcomeAnimation] = useState('fade_up');
  const [loginAnimation, setLoginAnimation] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const animate = (fn: Function, duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        fn();
        resolve();
      }, duration);
    })
  }
  
  useEffect(() => { 
    
    (async () => {
      await animate(() => setWelcomeAnimation('fade_down'), 4000)
      await animate(() => {
        if(buttonRef.current) 
          buttonRef.current.style.display = 'block';
          setLoginAnimation('fade_up')
      }, 2000)
    })();
    
  }, []);

  return (
    <div className={styles.welcome_animation}>
      <h2 className={styles[welcomeAnimation]}>Welcome</h2>
      <button className={`${styles[loginAnimation]} ${styles.login_button}`} ref={buttonRef}>Login</button>
    </div>
  ); 
}

export default App;
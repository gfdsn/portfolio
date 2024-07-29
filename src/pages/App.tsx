import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/welcome.module.css';
import { LoginButton } from '../components/Buttons/LoginButton';

function App() {

  const [welcomeAnimation, setWelcomeAnimation] = useState('fade_up');
  const [enterAnimation, setEnterAnimation] = useState('');
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
      await animate(() => setWelcomeAnimation('fade_down'), 3500)
      await animate(() => {
        if(buttonRef.current) 
          buttonRef.current.style.display = 'block';
          setEnterAnimation('fade_up')
      }, 1500)
    })();
    
  }, []);

  return (
    <div className={styles.welcome_animation}>
      <h2 className={styles[welcomeAnimation]}>Welcome</h2>
      <LoginButton state={enterAnimation} reference={buttonRef}/>
    </div>
  ); 
}

export default App;
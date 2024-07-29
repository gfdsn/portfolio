import React, { RefObject } from "react";
import styles from '../../styles/welcome.module.css';
import { useNavigate } from "react-router-dom";

type ButtonProps = {
    state: string,
    reference: RefObject<HTMLButtonElement>
}

export const LoginButton = ({state, reference}: ButtonProps) => {

    const navigate = useNavigate();
    const enter = () => navigate('/home');
    
    return (
        <button 
            className={`${styles[state]} ${styles.enter_button}`} 
            ref={reference}
            onClick={enter}
            >
                <span>ENTER</span>
        </button>
    )
}
import React from "react";
import styles from '../styles/home.module.css'
import { FaDoorOpen } from "react-icons/fa";

const Home = () => {
    return (
        <div className={styles.bg}>
            <nav className={styles.nav}>
                <input type="text" />
                <button>
                    <FaDoorOpen />
                </button>
            </nav>
            <main>
                <h1>main</h1>
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    )
}

export default Home
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const [showSignUp, setShowSignUp] = useState(false);

    return <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
            <Link to="/">
                <h2 className="title">Hire & Learn</h2>
            </Link>
        </div>
        <div className={styles.navbarContainer}>
            <Link to="/">
                <p className={styles.navItem}>Home</p>
            </Link>
            <Link to="/about">
                <p className={styles.navItem}>About</p>
            </Link>
            <div 
                className={styles.authDiv}
                onMouseEnter={() => setShowSignUp(true)}
                onMouseLeave={() => setTimeout(() => setShowSignUp(false), 5000)}
            >
                <a href="..#" className="login">
                    <p className={styles.navItem}>Sign in</p>
                </a>
                <a href="..#" className={showSignUp ? `${styles.signup} activated`: `${styles.signup} hidden`}>
                    <p className={styles.navItem}>Sign up</p>
                </a>
            </div>
        </div>
    </nav>
}

export default Navbar;

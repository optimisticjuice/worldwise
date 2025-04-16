import { Link } from "react-router-dom";
import styles from "./Logo.module.css"; // Import the CSS module

function Logo(){
    return(
        <Link to="/">
            <img src="/logo.png" alt="Worldwise logo" className={styles.logo}/>
            </Link>
    )
}

export default Logo;

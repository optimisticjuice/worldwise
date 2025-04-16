import { Link } from "react-router-dom";
import styles from "./PageNav.module.css"; // Import the CSS module

function PageNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
            </ul>
        </nav>
    );

}
export default PageNav;
// Compare this snippet from world_wise/App.jsx:
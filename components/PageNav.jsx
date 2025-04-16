import { NavLink , Link } from "react-router-dom";
import styles from "./PageNav.module.css"; // Import the CSS module
import Logo from "./Logo"; // Import the Logo component

function PageNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Logo /> {/* Add the Logo component here */}</li> 
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );

}
export default PageNav;
// Compare this snippet from world_wise/App.jsx:
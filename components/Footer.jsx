import Footer from "./Footer.module.css";


function AppFooter(){
    return(
        <footer className={Footer.footer}>
            <p className={Footer.copyright}>World Wise &copy; {new Date().getFullYear()}
                 by World Wise Inc. All rights reserved.&trade;
            </p>
        </footer>
    );
}

export default AppFooter;

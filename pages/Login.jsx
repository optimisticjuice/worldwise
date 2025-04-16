import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");


  return(
    <main className={styles.login}>
      <PageNav />
      
      <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>

        </div>
    
        <div className={styles.row}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </form>        
    </main>


    );

}

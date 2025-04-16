import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import PageNav from "../components/PageNav";



function AppLayout() {

  return (
    <>
    <PageNav/>
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
    </>
  );
}

export default AppLayout;

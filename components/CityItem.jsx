import styles, {cityItem, deleteBtn} from './CityItem.module.css'
import { Link } from "react-router-dom";

const formatDate = (data) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(data));
};

function CityItem({city}){
    const {cityName, emoji, date, id, position} = city;
    
    const {latitude, longitude} = position;

  return(
    
    <li>
      <Link className={styles.CityItem} to={`${id}?lat${latitude}&lng${longitude}`}>
       <span className={styles.emoji}>{emoji}</span>
       <h3 className={cityItem}>{cityName}</h3>
       <time className={styles.date}>({formatDate(date)})</time>
       <button className={deleteBtn}>
        &times;
       </button>
       </Link>
     </li>
)
}
 export default CityItem


import styles, {cityItem, deleteBtn} from './CityItem.module.css'

const formatDate = (data) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(data));
};

function CityItem({city}){
    const {cityName, emoji, date} = city;
    
  return(
     <li className={cityItem}>
       <span className={styles.emoji}>{emoji}</span>
       <h3 className={cityItem}>{cityName}</h3>
       <time className={styles.date}>({formatDate(date)})</time>
       <button className={deleteBtn}>
        &times;
       </button>
     </li>
)
}
 export default CityItem


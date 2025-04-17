import CityItem from './CityItem';
import styles from './CityList.module.css'
import Spinner from "./Spinner";
import Message from "./Message";


function CityList({cities, isLoading}){
    if(isLoading){
        return <Spinner/>;
    } 
    if(!cities.length){
        return <Message message="No cities found" /> // Pass the message and emoji as props to Message
    }
  return(
     <div>
         <ul className={styles.cityList}>
          {cities.map((city) => (
            <CityItem city={city} key={city.id} /> // Pass the city object as a prop to CityItem
          ))}
          </ul>    
     </div>
    )
  }
 export default CityList
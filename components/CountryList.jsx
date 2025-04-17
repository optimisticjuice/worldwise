import styles from './CountryList.module.css';
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({cities, isLoading}){
    if(isLoading){
        return <Spinner/>;
    } 
    if(!cities.length){
        return <Message message="No cities found" /> // Pass the message and emoji as props to Message
    }
    const countries = cities.reduce((arr, city) => {
      if(!arr.map(el => el.city).includes(city.country)){
       return  [...arr, {country: city.country, emoji: city.emoji}];
      }else{
        return arr;
      }
        
      },[]
    )
  return(
     <div>
         <ul className={styles.cityList}>
          {countries.map((country) => (
            <CountryItem country={country} key={country.country} /> // Pass the country object as a prop to CountryItem
          ))}
          </ul>    
     </div>
    )
  }
 export default CountryList;
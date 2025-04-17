import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const {emoji} = country;
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

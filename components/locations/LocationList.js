import LocationItem from './LocationItem';
import classes from './LocationList.module.css';

function LocationList(props) {
  return (
    <ul className={classes.list}>
      {props.locations.map((location) => (
        <LocationItem
          key={location.id}
          id={location.id}
          image={location.image}
          title={location.title}
          address={location.address}
        />
      ))}
    </ul>
  );
}

export default LocationList;

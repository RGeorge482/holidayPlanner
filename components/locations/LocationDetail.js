  
import classes from './LocationDetail.module.css';

function LocationDetail(props) {

  const deleteHandler = () => {
    
  }

  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <div className={classes.actions}>
          <button onClick={deleteHandler}>Remove</button>
        </div>
    </section>
  );
}

export default LocationDetail;
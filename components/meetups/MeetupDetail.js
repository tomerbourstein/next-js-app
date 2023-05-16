import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.img} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.address}</p>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;

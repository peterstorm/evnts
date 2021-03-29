import classes from './event-summary.module.css';

type Props = {
  title: string;
}

export const EventSummary: React.FC<Props> = ({ title }) => {

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;

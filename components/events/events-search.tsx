import React, {useRef} from "react";
import Button from '../ui/button';
import classes from './event-search.module.css';

type Props = {
  onSearch: (year: string, month: string) => void;
}

const EventSearch: React.FC<Props> = ({ onSearch }) => {

  const yearInputRef = useRef(null);
  const monhtInputRef = useRef(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (yearInputRef.current && monhtInputRef.current) {
      const selectedYear = yearInputRef.current.value;
      const selectedMonth = monhtInputRef.current.value;

      onSearch(selectedYear, selectedMonth);
    }
  }

  return (
    <form className={classes.form} onSubmit={e => submitHandler(e)}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monhtInputRef}>
            <option value="1">jan</option>
            <option value="2">feb</option>
            <option value="3">mar</option>
            <option value="4">apr</option>
            <option value="5">may</option>
            <option value="6">jun</option>
            <option value="7">jul</option>
            <option value="8">aug</option>
            <option value="9">sep</option>
            <option value="10">oct</option>
            <option value="11">nov</option>
            <option value="12">dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;

import React from 'react';
import EventType from '../../domain/events';
import EventItem from './event-item';

import classes from './event-list.module.css';

type Props = {
  events: EventType[];
}

const EventList: React.FC<Props> = ({ events } ) => {
  return (
    <ul className={classes.list}>
      {events.map(event => <EventItem event={event} key={event.id} />)}
    </ul>
  );
}

export default EventList;

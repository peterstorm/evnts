import {useRouter} from 'next/router';
import React, {Fragment} from 'react';
import {getEventById} from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import EventType from '../../domain/events';

type Props = {
}

const EventDetailPage: React.FC<Props> = () => {
  
  const router = useRouter();

  const eventId = router.query.eventId;
  const event: EventType = getEventById(eventId);

  if (!event) {
    return (
      <p>No event found</p>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics 
        event={event}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
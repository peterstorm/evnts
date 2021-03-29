import React, {Fragment} from "react";
import EventType from "../../domain/events";
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';
import {getAllEvents} from "../../dummy-data";
import {useRouter} from "next/router";

type Props = {
}

const AllEventsPage: React.FC<Props> = () => {
  const router = useRouter(); 

  const findEventsHandler = (year: String, month: String) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  const events: EventType[] = getAllEvents();
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export default AllEventsPage;

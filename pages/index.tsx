import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import EventType from '../domain/events';

function HomePage() {

  const featuredEvents: EventType[] = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;

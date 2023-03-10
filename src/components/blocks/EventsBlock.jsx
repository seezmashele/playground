import SectionTitle from '../widgets/SectionTitle'
import EventCard from '../cards/EventCard'

const EventsBlock = ({ events, title = '' }) => (
  <>
    {title && <SectionTitle title={title} />}
    <div className="relative flex w-full flex-wrap overflow-hidden">
      {events &&
        events.map((item, index) => (
          <EventCard
            data={item}
            key={`eventslist${item.slug}${index}`}
            isLastItem={index === events.length - 1}
          />
        ))}
    </div>
  </>
)

export default EventsBlock

import SectionTitle from "../widgets/SectionTitle"
import EventCard from "../cards/EventCard"
import GridCard_Event from "../loaders/GridCard_Event"

// check if data is placehold or fetched then have an EventsPlaceholderBlock
// so you arent checking if each item is a placeholder 1 by 1

const EventsBlock = ({ events, title = "" }) => {
  const usePlaceholders = events && events[0] && events[0].placeholder

  return (
    <>
      {title && <SectionTitle title={title} />}
      {usePlaceholders ? (
        <div className="relative flex w-full flex-wrap overflow-hidden">
          {events.map((item, index) => (
            <GridCard_Event
              key={`eventsblockloader${index}`}
              // isLastItem={index === events.length - 1}
            />
          ))}
        </div>
      ) : (
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
      )}
    </>
  )
}

export default EventsBlock

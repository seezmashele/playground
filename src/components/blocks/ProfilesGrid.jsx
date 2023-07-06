import SectionTitle from "../widgets/SectionTitle"
import EventCard from "../cards/EventCard"
import ProfileCard_Grid from "../cards/ProfileCard_Grid"

const ProfilesGrid = ({ events, title = "" }) => (
  <>
    {title && <SectionTitle title={title} />}
    <div className="relative flex w-full flex-wrap overflow-hidden">
      {events &&
        events.map((item, index) => (
          <ProfileCard_Grid
            data={item}
            key={`profilesgrid${item.slug}${index}`}
            isLastItem={index === events.length - 1}
          />
        ))}
    </div>
  </>
)

export default ProfilesGrid

import SidebarTitle from '../widgets/SidebarTitle'
import { useDatabase } from '../../context/DatabaseContext'
import SidebarProfile from './Sidebar/SidebarProfile'

const Sidebar = () => {
  const { useSidebarGroups } = useDatabase()
  const { sidebarGroups1 } = useSidebarGroups()

  const tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ]
  const tempTags2 = tempTags.splice(9)
  tempTags2.splice(9)

  return (
    <aside className="border_color--main sidebar_width border-lF min-h-screenF box_radius sticky top-5 bottom-5 my-5 ml-7 h-full flex-shrink-0 overflow-hidden bg-neutral-50 py-5 pl-1  xs:hidden sidebar-breakpoint:block">
      {sidebarGroups1 && (
        <>
          <SidebarTitle title="Suggested by LittleDragon" />
          <div className="w-full">
            {sidebarGroups1.map((item, index) => (
              <SidebarProfile item={item} key={`sidebarGroups1${index}`} />
            ))}
          </div>
        </>
      )}
    </aside>
  )
}

export default Sidebar

// import { Search } from 'react-bootstrap-icons'
import SidebarTitle from "../widgets/SidebarTitle"
import { useDatabase } from "../../context/DatabaseContext"
import SidebarTopic from "./Sidebar/SidebarTopic"
import SidebarProfile from "./Sidebar/SidebarProfile"
import SidebarArticleCard from "./Sidebar/SidebarArticleCard"

const Sidebar = () => {
  const { useSidebarGroups, useSidebarArticles } = useDatabase()
  const { sidebarGroups1 } = useSidebarGroups()
  const { sidebarArticles1 } = useSidebarArticles()

  const tempTags = [
    "Valorant",
    "Apex Legends",
    "Twitch",
    "YouTube",
    "Overwatch",
    "MMO",
    "Fifa",
    "Sandbox",
    "Indie",
    "Tournament",
    "Guide",
    "Rocket League",
    "Sea of Thieves",
    "Minecraft",
    "Dota",
    "Rust",
    "GTA",
    "V Rising",
    "Vanguard",
    "Cyberpunk",
    "Skyrim",
    "Announcement",
    "Cosplay"
  ]
  const tempTags2 = tempTags.splice(9)
  tempTags2.splice(9)

  return (
    <aside className="border_color--main sidebar_width min-h-screenF my-4F border-lF sticky top-0 bottom-5 ml-7 h-full flex-shrink-0 pl-1 xs:hidden sidebar-breakpoint:block">
      {/* <div className="box_radius mb-3 flex items-center overflow-hidden rounded-full bg-neutral-100 py-3 px-4">
        <Search className="mr-4" />
        <div className="">Search</div>
      </div> */}
      <div className="box_radius bg-neutral-50F mt-5 overflow-hidden py-4">
        {/* {tempTags && (
          <>
            <SidebarTitle title="Trending Topics" />
            <div className="box_radius darkmode_transition mb-8 flex h-[8rem] w-full flex-grow flex-wrap gap-2.5 overflow-hidden px-5">
              {tempTags.map((item, index) => (
                <SidebarTopic
                  item={item}
                  key={`sidebarTags1${index}`}
                  isLastItem={tempTags.length - 1 === index}
                />
              ))}
            </div>
          </>
        )} */}

        {/* <div className="border_color--main mb-5 w-full border-t" /> */}

        {sidebarArticles1 && (
          <>
            <SidebarTitle title="Recommended" />
            <div className="mb-7 w-full">
              {sidebarArticles1.map((item, index) => (
                <SidebarArticleCard
                  item={item}
                  key={`sidebarArticles1${index}`}
                />
              ))}
            </div>
          </>
        )}

        {sidebarGroups1 && (
          <>
            <SidebarTitle title="Communities" />
            <div className="w-full">
              {sidebarGroups1.map((item, index) => (
                <SidebarProfile item={item} key={`sidebarGroups1${index}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  )
}

export default Sidebar

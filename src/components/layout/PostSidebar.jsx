// import SidebarTitle from '../widgets/SidebarTitle'
import { useDatabase } from "../../context/DatabaseContext"
// import SidebarProfile from './Sidebar/SidebarProfile'
import SidebarAuthorCard from "./Sidebar/SidebarAuthorCard"

const PostSidebar = ({ authorImage, authorName }) => {
  const { useSidebarGroups } = useDatabase()
  const { sidebarGroups1 } = useSidebarGroups()

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
  const tempTags2 = tempTags.splice(6)
  tempTags2.splice(9)

  return (
    <aside className="border_color--main sidebar_widthf xs:w-sidebar_xsF border-lf pl-6f sticky top-14 h-full w-84 flex-shrink-0 pt-7 xs:hidden sidebar-breakpoint:block">
      {/* {sidebarGroups1 && <SidebarAuthorCard item={sidebarGroups1[0]} />} */}
      <div className="flex-colf flex items-center text-sm">
        <div className="card_author_image mr-3 h-12 w-12 overflow-hidden">
          <img src={authorImage} alt="" className="h-full w-full" />
        </div>
        <div className="mt-2 flex flex-col">
          <div className="inline_author mr-1 text-base font-semibold leading-tight">
            The Real Slim Shadee
          </div>
          <div className="inline_author text-sm text-neutral-500">
            @{authorName}
          </div>
        </div>
      </div>

      <div className="border_color--main mt-8 mb-3 h-72 w-full rounded-lg border" />
      {/* <SidebarTitle title="Communities" /> */}

      {/* {sidebarGroups1 && (
        <>
          <div className="mb-9 w-full">
            {sidebarGroups1.map((item, index) => (
              <SidebarProfile item={item} key={`sidebarGroups1${index}`} />
            ))}
          </div>
        </>
      )} */}
    </aside>
  )
}

export default PostSidebar

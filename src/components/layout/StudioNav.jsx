import Link from "next/link"
import { useTheme } from "next-themes"
import { Search, List } from "react-bootstrap-icons"
import { drawerItems } from "./Drawer/DrawerItems"
// import ProfileDropdown from './Nav/ProfileDropdown'
import { useAuth } from "../../context/AuthContext"
import PostDropdown from "./Nav/PostDropdown"
import MenuDropdown from "./Nav/MenuDropdown"
import SettingsDropdown from "./Nav/SettingsDropdown"

// import SettingsDropdown from './Nav/SettingsDropdown'

const StudioNav = ({ selectedPageIndex = -1, hideNavButtons = false }) => {
  const { theme } = useTheme()
  const { currentUser } = useAuth()

  return (
    <nav className="border_color--main container_bg_color--primary border-bF fixed top-0 z-40 w-full bg-opacity-95 backdrop-blur-lg">
      <div className="relative mx-auto h-14 px-4">
        <div className="align-center flex h-full w-full items-center justify-between">
          <div className="flex h-7 w-48">
            <div className="text-accent-mainF mr-4 ml-0 flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-100">
              <List className="h-5 w-5" />
            </div>
            <Link href="/" passHref>
              <div className="h-[32px] w-40 flex-shrink-0 cursor-pointer select-none">
                <img
                  className="h-full w-full object-contain object-left"
                  // src={
                  //   theme === "dark" ? "/logo-min-white.svg" : "/logo-min.svg"
                  // }
                  src={theme === "dark" ? "/logo-min-white.svg" : "/logo31.png"}
                  alt="playground logo"
                />
              </div>
            </Link>
          </div>

          {/* <div className="box_radius main_searchbar_shadow flex w-full max-w-sm items-center overflow-hidden rounded-md border border-neutral-300 text-neutral-600 shadow-inner transition-colors dark:bg-neutral-900">
            <div className="w-full py-1.5 px-4">Search</div>
            <Search className="border-neutral- 500 h-9 w-12 cursor-pointer border-l bg-neutral-100 p-3 hover:bg-neutral-200" />
          </div> */}

          {/* <div
            className={` relative mx-auto flex text-center text-sm ${
              hideNavButtons && 'hidden'
            }`}
          >
            {drawerItems &&
              drawerItems.map((item, index) => (
                <Link href={item.link} passHref key={`navbutton${index}`}>
                  <div className="box_radius mx-1.5 mt-0 inline-block cursor-pointer select-none px-2">
                    <div className="mt-2 flex h-10 items-center px-1">
                      <div
                        className={`text-sm ${
                          selectedPageIndex === index &&
                          'text-violet-500 dark:text-violet-500'
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                    <div
                      className={`pointer-events-none relative mt-1.5 h-0.5 w-full bg-violet-500 dark:text-violet-500 ${
                        selectedPageIndex !== index && 'opacity-0'
                      }`}
                    />
                  </div>
                </Link>
              ))}
          </div> */}

          <div className="relative flex h-9 w-48 flex-shrink select-none justify-end space-x-2.5 text-sm">
            {/* <SettingsDropdown /> */}
            {currentUser && <PostDropdown />}
            <MenuDropdown currentUser={currentUser} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default StudioNav

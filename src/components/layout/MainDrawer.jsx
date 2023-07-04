import Link from "next/link"
import { drawerItems } from "./Drawer/DrawerItems"
// import ProfileDropdown from './Nav/ProfileDropdown'
// import { useAuth } from '../../context/AuthContext'
// import PostDropdown from './Nav/PostDropdown'
// import MenuDropdown from './Nav/MenuDropdown'

// import SettingsDropdown from './Nav/SettingsDropdown'

const MainDrawer = ({ selectedPageIndex = -1 }) => {
  // const { currentUser } = useAuth()

  return (
    <nav className="border_color--main stickyF border-rF rounded-tr-mdF fixed top-14 left-0 flex  h-screen min-h-screen w-56 flex-shrink-0 flex-col pt-2.5 pl-3 pr-3">
      {/* <Link href="/" passHref>
        <div className="ml-3 h-7 w-32 flex-shrink-0 cursor-pointer select-none">
          <img
            className="h-full w-full object-contain object-left"
            src={theme === 'dark' ? '/logo-min-white.svg' : '/logo-min.svg'}
            alt="playground logo"
          />
        </div>
      </Link> */}
      <div className="mt-5F flex w-full flex-col text-sm">
        {drawerItems &&
          drawerItems.map((item, index) => {
            const itemKey = `maindrawerbutton${item.title}${index}`
            if (item.divider) {
              return (
                <div
                  className="border_color--main my-2 w-full border-b dark:border-neutral-500"
                  key={itemKey}
                />
              )
            }
            if (item.link) {
              return (
                <Link href={item.link} passHref key={itemKey}>
                  <div className="mt-0 flex cursor-pointer select-none rounded-lg py-1.5 px-2.5 hover:bg-neutral-100">
                    <div className="mr-4 flex h-7 w-7 items-center justify-center text-base">
                      {item.icon}
                    </div>
                    <div className="flex items-center px-1">
                      <div
                        className={`text-sm ${
                          selectedPageIndex === index && "font-semibold"
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }
          })}
        {/* <div className="box_radius bg-[#ff0000]F mt-3 cursor-pointer select-none rounded-full bg-violet-500 py-1.5 px-2 text-center text-lg font-semibold text-white shadow-lg hover:bg-violet-700">
          Post
        </div> */}
        {/* <div className="relative flex h-9 w-48 flex-shrink select-none justify-end space-x-2.5 text-sm">
            {currentUser && <PostDropdown />}
            <MenuDropdown currentUser={currentUser} />
          </div> */}
      </div>
    </nav>
  )
}

export default MainDrawer

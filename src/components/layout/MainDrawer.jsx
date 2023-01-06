import Link from 'next/link'
import { useTheme } from 'next-themes'
import { navPageButtons } from './Nav/PageButtons'
// import ProfileDropdown from './Nav/ProfileDropdown'
// import { useAuth } from '../../context/AuthContext'
// import PostDropdown from './Nav/PostDropdown'
// import MenuDropdown from './Nav/MenuDropdown'

// import SettingsDropdown from './Nav/SettingsDropdown'

const MainDrawer = ({ selectedPageIndex = -1 }) => {
  const { theme } = useTheme()
  // const { currentUser } = useAuth()

  return (
    <nav className="border_color--main stickyF border-rF rounded-tr-mdF fixed top-14 left-0 flex  h-screen min-h-screen w-56 flex-shrink-0 flex-col pt-5 pl-4 pr-5">
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
        {navPageButtons &&
          navPageButtons.map((item, index) => (
            <Link href={item.link} passHref key={`maindrawerbutton${index}`}>
              <div className="box_radius mt-0 flex cursor-pointer select-none py-1.5 px-2 hover:bg-neutral-100">
                <div className="mr-2 flex h-7 w-7 items-center justify-center text-base">
                  {item.icon}
                </div>
                <div className="flex items-center px-1">
                  <div
                    className={`text-base ${
                      selectedPageIndex === index && 'font-bold'
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
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

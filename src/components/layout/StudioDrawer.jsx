import Link from "next/link"
import { drawerItems } from "./Drawer/StudioDrawerItems"

const StudioDrawer = ({ selectedPageIndex = -1 }) => {
  return (
    <nav className="border_color--main stickyF rounded-tr-mdF fixed top-14 left-0 flex min-h-screen w-[14.5rem] flex-shrink-0 flex-col border-r bg-white pt-2.5 pl-3 pr-3">
      <div className="mt-4 mb-5 flex flex-col items-center justify-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-main text-4xl font-semibold text-white">
          S
        </div>
        <div className="text-sm font-semibold">Your Profile</div>
        <div className="text-sm text-neutral-600">Sizwe Mashele</div>
      </div>
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
                  <div
                    className={`mt-0 flex cursor-pointer select-none rounded-lg py-1.5 px-2.5 hover:bg-neutral-100  ${
                      selectedPageIndex === index && "bg-neutral-100"
                    }`}
                  >
                    <div className="mr-4 flex h-7 w-7 items-center justify-center text-base">
                      {selectedPageIndex === index
                        ? item.iconFilled
                        : item.icon}
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
      </div>
    </nav>
  )
}

export default StudioDrawer

import Link from "next/link"
import { drawerItems } from "./Drawer/DrawerItems"

const StudioDrawer = ({ selectedPageIndex = -1 }) => {
  return (
    <nav className="border_color--main stickyF border-rF rounded-tr-mdF fixed top-14 left-0 flex w-56 flex-shrink-0 flex-col pt-2.5 pl-3 pr-3">
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
      </div>
    </nav>
  )
}

export default StudioDrawer

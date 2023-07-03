import Link from "next/link"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import {
  Calendar2Event,
  ChatSquareText,
  Pencil,
  Plus
} from "react-bootstrap-icons"

const PostDropdown = () => {
  const menuItems = [
    {
      icon: <Calendar2Event className="h-3.5 w-3.5" />,
      title: "Create Event",
      link: "/create/event"
    },
    {
      icon: <ChatSquareText className="h-3.5 w-3.5" />,
      title: "Create Newsletter",
      link: "/create/post"
    }
    // { divider: true },
    // {
    //   icon: <ChatSquareText className="h-3.5 w-3.5" />,
    //   title: "Create Poll",
    //   link: "/create/post"
    // }
  ]

  return (
    <Menu>
      {() => (
        <>
          <Menu.Button className="border_color--main bg-neutral-150F borderF pl-2.5F flex h-full flex-shrink-0 cursor-pointer select-none items-center space-x-2.5 overflow-hidden rounded-full pl-4 pr-4 text-sm  transition-shadow hover:bg-neutral-100">
            {/* <Plus className="h-4 w-4 flex-shrink-0" /> */}
            <div className="font-semiboldF whitespace-nowrap">Create event</div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="dropdown_bg absolute right-0 mt-14 w-60 origin-top-right divide-y divide-neutral-100 rounded-md border border-neutral-400 bg-white text-black shadow-md ring-0 ring-black ring-opacity-5 focus:outline-none dark:text-white">
              <div className="px-1 py-1 ">
                {menuItems &&
                  menuItems.map((item, index) => {
                    const itemKey = `profileDropdown${item.title}${index}`
                    if (item.divider) {
                      return (
                        <div
                          className="border_color--main my-1.5 w-full border-b dark:border-neutral-500"
                          key={itemKey}
                        />
                      )
                    }
                    if (item.link) {
                      return (
                        <Link href={item.link} passHref key={itemKey}>
                          <Menu.Item>
                            {() => (
                              <div className="hover_color--neutral flex w-full select-none items-center rounded-md px-3 py-2 text-sm">
                                <div className="text-accent-mainF mr-4 ml-0">
                                  {item.icon}
                                </div>
                                <div className="overflow-hidden">
                                  <div className="font-semiboldF w-full">
                                    {item.title}
                                  </div>
                                  {/* <div className="mt-1 w-full overflow-hidden truncate text-xs opacity-50">
                                    {item.description}
                                  </div> */}
                                </div>
                              </div>
                            )}
                          </Menu.Item>
                        </Link>
                      )
                    }
                    if (item.action) {
                      return (
                        <Menu.Item key={itemKey}>
                          {() => (
                            <button
                              onClick={item.action}
                              type="button"
                              className="hover_color--neutral flex w-full select-none items-center rounded-md px-2 py-2 text-sm"
                            >
                              {/* <div className="mr-2.5">{item.icon}</div> */}
                              <div className="flex flex-col justify-start">
                                <div className="text-left font-semibold">
                                  {item.title}
                                </div>
                                <div className="mt-0.5 text-left text-xs opacity-70">
                                  {item.description}
                                </div>
                              </div>
                            </button>
                          )}
                        </Menu.Item>
                      )
                    }
                    return null
                  })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default PostDropdown

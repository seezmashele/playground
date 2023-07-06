import {
  HouseDoor,
  HouseDoorFill,
  Collection,
  CollectionFill,
  SuitHeart,
  SuitHeartFill,
  Person,
  PersonFill,
  People,
  PeopleFill,
  Bookmark,
  BookmarkFill,
  Gear,
  GearFill,
  QuestionCircle,
  QuestionCircleFill
} from "react-bootstrap-icons"

export const homePageIndex = 0
export const eventsPageIndex = 1
export const articlesPageIndex = 2
export const peoplePageIndex = 3
export const groupsPageIndex = 4
export const settingsPageIndex = 4

export const drawerItems = [
  {
    icon: <HouseDoor />,
    iconFilled: <HouseDoorFill />,
    title: "Dashboard",
    link: "/"
  },
  {
    icon: <SuitHeart />,
    iconFilled: <SuitHeartFill />,
    title: "Your Events",
    link: "/favourites"
  },
  {
    icon: <Bookmark />,
    iconFilled: <BookmarkFill />,
    title: "Examples",
    link: "/saved"
  },
  { divider: true },
  // { divider: true },
  {
    icon: <Gear />,
    iconFilled: <GearFill />,
    title: "Settings",
    link: "/settings"
  },
  {
    icon: <QuestionCircle />,
    iconFilled: <QuestionCircleFill />,
    title: "Help",
    link: "/help"
  }
]

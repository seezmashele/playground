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
    title: "Home",
    link: "/"
  },
  {
    icon: <SuitHeart />,
    iconFilled: <SuitHeartFill />,
    title: "Favourites",
    link: "/following"
  },
  { divider: true },
  {
    icon: <Bookmark />,
    iconFilled: <BookmarkFill />,
    title: "Saved Events",
    link: "/saved"
  },
  { divider: true },
  {
    icon: <Person />,
    iconFilled: <PersonFill />,
    title: "Profile",
    link: "/profile"
  },
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

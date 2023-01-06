import {
  House,
  // Bell,
  // Envelope,
  CalendarEvent,
  Person,
  Bookmark,
  Gear,
  Chat
} from 'react-bootstrap-icons'

export const homePageIndex = 0
export const eventsPageIndex = 1
export const articlesPageIndex = 2
export const peoplePageIndex = 3
export const groupsPageIndex = 4
export const settingsPageIndex = 4

export const navPageButtons = [
  {
    icon: <House />,
    title: 'Home',
    link: '/'
  },
  {
    icon: <CalendarEvent />,
    title: 'Events',
    link: '/events'
  },
  {
    icon: <Chat />,
    title: 'Topics',
    link: '/posts'
  },
  // {
  //   icon: <House />,
  //   title: 'Posts',
  //   link: '/posts'
  // },
  // {
  //   icon: <Bell />,
  //   title: 'Notifications',
  //   link: '/'
  // },
  // {
  //   icon: <Envelope />,
  //   title: 'Messages',
  //   link: '/'
  // },
  {
    icon: <Bookmark />,
    title: 'Saved',
    link: '/'
  },
  {
    icon: <House />,
    title: 'Communities',
    link: '/community'
  },
  {
    icon: <Person />,
    title: 'Profile',
    link: '/profile'
  },
  {
    icon: <Gear />,
    title: 'Settings',
    link: '/settings'
  }
]

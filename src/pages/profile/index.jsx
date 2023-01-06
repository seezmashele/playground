import { useEffect, useState } from 'react'
import {
  BoxArrowUpRight,
  Globe,
  Instagram,
  Steam,
  Twitch,
  Twitter,
  Youtube
} from 'react-bootstrap-icons'
import PageHead from '../../components/misc/PageHead'
import ProfileSidebar from '../../components/layout/ProfileSidebar'
import ArticlesListBlock from '../../components/blocks/ArticlesListBlock'
import { useDatabase } from '../../context/DatabaseContext'
import MainDrawer from '../../components/layout/MainDrawer'
import Nav from '../../components/layout/Nav'

const HomePage = () => {
  const { useNewsPageArticles, useSidebarGroups } = useDatabase()
  const { newsPageArticles1 } = useNewsPageArticles()
  const { sidebarGroups1 } = useSidebarGroups()
  const [tempPic, setTempPic] = useState(null)
  const [tempCover, setTempCover] = useState(null)
  const [tempProfileName, setTempProfileName] = useState('ChloGeraghty')

  useEffect(() => {
    if (sidebarGroups1 && sidebarGroups1[0]) {
      if (sidebarGroups1[0].coverImage) {
        setTempPic(sidebarGroups1[0].coverImage)
        setTempProfileName(sidebarGroups1[0].title)
      }
    }
  }, [sidebarGroups1])

  useEffect(() => {
    if (newsPageArticles1 && newsPageArticles1[7]) {
      if (newsPageArticles1[7].cover_image) {
        setTempCover(newsPageArticles1[7].cover_image)
      }
    }
  }, [newsPageArticles1])

  const usersLinks = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'thebiggestnoob.com',
      color: '#8b5cf6',
      link: '/'
    },
    {
      icon: <Twitch className="h-5 w-5" />,
      title: 'twitch.tv/dead_oryx',
      color: '#8b5cf6',
      link: '/'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      title: 'twitter.com/dead_oryx',
      color: '',
      link: '/'
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      title: 'youtube.com/dead_oryx',
      color: '#ff0000',
      link: '/'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: 'instagram.com/dead_oryx',
      color: '#ec4899',
      link: '/'
    }
  ]

  return (
    <>
      <PageHead title="" />
      <Nav />
      <div className="h-12" />

      <div className="mx-auto ml-56 flex w-full max-w-5xl">
        <MainDrawer />
        <div className="">
          <main className="border_color--main page_padding_x w-full overflow-hidden">
            {/* <div className="absolute top-0 left-0 -z-50 h-80 w-full bg-gradient-to-b from-neutral-300 to-transparent opacity-10" /> */}
            <div className=" mx-auto mb-1 flex h-full w-full justify-end space-x-7 pt-5 pb-7">
              <div className="space-between items-centerF max-w-4xlF flex w-full">
                <div className="flex flex-grow flex-col">
                  <div className="box_radius h-44 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={tempCover}
                      className="h-full w-full object-cover"
                      draggable="false"
                      alt="temp profile pic"
                    />
                  </div>
                  <div className="mt-4 flex">
                    <div className="container_bg_color--secondary  mr-6 ml-6 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-4 border-white">
                      <img
                        src={tempPic}
                        draggable="false"
                        alt="temp profile pic"
                      />
                    </div>
                    <div className="text-sm">
                      <h3 className="text-2xl font-bold">{tempProfileName}</h3>
                      <p className="light_text_color mt-0.5">@chlodawg911</p>
                      <p className="mt-4 leading-relaxed">
                        Destroyer of sesame chicken wraps <br />
                        📺http://twitch.tv/dead_oryx
                        📷http://instagram.com/dead_oryx
                        📱http://tiktok.com/@deadoryx
                      </p>
                    </div>
                  </div>
                  <div className="sidebar_width box_radius shrink-0 overflow-hidden bg-neutral-50 py-1">
                    <div className="px-5 py-3 text-base font-bold">Links</div>
                    {usersLinks &&
                      usersLinks.map((item) => (
                        <div className="user_link_button box_radius flex w-full cursor-pointer py-2 pl-5 pr-3 hover:bg-neutral-100">
                          <div className={`mr-3 text-[${item.color}]`}>
                            {item.icon}
                          </div>
                          <div className="flex-grow text-sm">{item.title}</div>
                          <BoxArrowUpRight className="outbound_link_icon" />
                        </div>
                      ))}
                  </div>
                </div>
                {/* <div className="mt-5 w-full" /> */}
              </div>
            </div>
          </main>

          <main className="page_width_wide mx-auto flex w-full flex-row">
            <div className="main_content_container border-t border-neutral-150">
              {newsPageArticles1 && (
                <ArticlesListBlock
                  articles={newsPageArticles1}
                  title="Latest posts"
                />
              )}
            </div>
            <ProfileSidebar />
          </main>
        </div>
      </div>
    </>
  )
}

export default HomePage

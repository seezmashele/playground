import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import ArticlesListBlock from '../components/blocks/ArticlesListBlock'
import { useDatabase } from '../context/DatabaseContext'
import { homePageIndex } from '../utils/constants/nav'
import EventsBlock from '../components/blocks/EventsBlock'
import MainDrawer from '../components/layout/MainDrawer'
import FeaturedBlockThin from '../components/blocks/FeaturedBlockThin'

const HomePage = () => {
  const { useHomePageEvents, useHomePageArticles } = useDatabase()
  const { homePageEvents1 } = useHomePageEvents()
  const { homePageArticles1, homePageArticles2, homePageArticles3 } =
    useHomePageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={homePageIndex} />

      <div className="h-16" />

      <div className="max_page_widthF mx-auto ml-56 flex w-full max-w-[70rem]">
        <MainDrawer selectedPageIndex={homePageIndex} />
        <div className="w-56 flex-shrink flex-grow">
          <FeaturedBlockThin articles={homePageArticles1} />
          <main className="page_width_wideF page_padding_x mx-auto mt-0 w-full">
            <div className=" flex flex-row">
              <div className="main_content_container mt-4">
                {/* <FeaturedStories articles={homePageArticles1} /> */}
                {homePageEvents1 && (
                  <EventsBlock events={homePageEvents1} title="" />
                )}
              </div>
              {/* <Sidebar /> */}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default HomePage

// import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import EventsBlock from '../components/blocks/EventsBlock'
import { useDatabase } from '../context/DatabaseContext'
import { articlesPageIndex } from '../utils/constants/nav'
import Pagination from '../components/layout/Pagination'
import MainDrawer from '../components/layout/MainDrawer'
import Nav from '../components/layout/Nav'
import FeaturedBlockThin from '../components/blocks/FeaturedBlockThin'

const HomePage = () => {
  const { useNewsPageArticles } = useDatabase()
  const { newsPageArticles1 } = useNewsPageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={articlesPageIndex} />
      <div className="h-12" />

      <div className="mx-auto ml-56 flex w-full max-w-[70rem]">
        <MainDrawer selectedPageIndex={articlesPageIndex} />
        <main className="mx-auto flex w-full flex-row">
          <div className="main_content_container">
            <FeaturedBlockThin articles={newsPageArticles1} />
            {newsPageArticles1 && (
              <EventsBlock events={newsPageArticles1} title="Popular Posts" />
            )}
            <Pagination />
          </div>
          {/* <Sidebar /> */}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default HomePage

import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import EventsListBlock from '../components/blocks/EventsListBlock'
import { useDatabase } from '../context/DatabaseContext'
import { eventsPageIndex } from '../utils/constants/nav'
import Pagination from '../components/layout/Pagination'
import MainDrawer from '../components/layout/MainDrawer'
import FeaturedBlockThin from '../components/blocks/FeaturedBlockThin'

const EventsPage = () => {
  const { useEventsPageEvents, useNewsPageArticles } = useDatabase()
  const { eventsPageEvents1 } = useEventsPageEvents()
  const { newsPageArticles1 } = useNewsPageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={eventsPageIndex} />
      <div className="h-16" />

      <div className="mx-auto ml-56 flex w-full max-w-5xl">
        <FeaturedBlockThin articles={newsPageArticles1} />
      </div>
      <div className="mx-auto ml-56 flex w-full max-w-5xl">
        <MainDrawer selectedPageIndex={eventsPageIndex} />
        <main className="page_width_wide mx-auto flex w-full flex-row">
          <div className="main_content_container mt-7">
            {eventsPageEvents1 && (
              <EventsListBlock
                events={eventsPageEvents1}
                // title="Trending Events"
              />
            )}
            <Pagination />
          </div>
          <Sidebar />
        </main>
      </div>

      <Footer />
    </>
  )
}

export default EventsPage

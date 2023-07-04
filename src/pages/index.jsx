import Nav from "../components/layout/Nav"
import PageHead from "../components/misc/PageHead"
import Sidebar from "../components/layout/Sidebar"
import { useDatabase } from "../context/DatabaseContext"
import { homePageIndex } from "../utils/constants/nav"
import EventsBlock from "../components/blocks/EventsBlock"
import MainDrawer from "../components/layout/MainDrawer"
import FeaturedTagsBar from "../components/blocks/FeaturedTagsBar"
import BodyWrapper from "../components/wrappers/BodyWrapper"
import ContentFullColWrapper from "../components/wrappers/ContentFullColWrapper"

const HomePage = () => {
  const { useHomePageEvents } = useDatabase()
  const { homePageEvents1 } = useHomePageEvents()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={homePageIndex} />

      <MainDrawer selectedPageIndex={homePageIndex} />
      <BodyWrapper>
        <ContentFullColWrapper>
          <FeaturedTagsBar />
          <main className="page_padding_x mt-3.5 flex w-full flex-row">
            <div className="main_content_container mt-4">
              {homePageEvents1 && (
                <EventsBlock events={homePageEvents1} title="" />
              )}
            </div>
            {/* <Sidebar /> */}
          </main>
        </ContentFullColWrapper>
      </BodyWrapper>
    </>
  )
}

export default HomePage

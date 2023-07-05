import Nav from "../components/layout/Nav"
import PageHead from "../components/misc/PageHead"
import Sidebar from "../components/layout/Sidebar"
import { Grid3x2GapFill, ListUl } from "react-bootstrap-icons"
import { useDatabase } from "../context/DatabaseContext"
import { homePageIndex } from "../utils/constants/nav"
import EventsBlock from "../components/blocks/EventsBlock"
import EventsListBlock from "../components/blocks/EventsListBlock"
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

      <MainDrawer selectedPageIndex={7} />
      <BodyWrapper>
        <ContentFullColWrapper>
          {/* <FeaturedTagsBar /> */}
          <div className="mt-3 flex h-10 w-full items-center justify-between px-8 text-black">
            <div className="font-semibold">Recent</div>
            <div className="flex h-10 w-full flex-grow flex-wrap items-center justify-end overflow-hidden">
              <div className="font-semiboldf text-accent-mainf mr-1 flex h-10 cursor-pointer items-center rounded-full px-4 text-sm hover:bg-neutral-100">
                Manage
              </div>
              <div className="bg-neutral-100F flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-100">
                <Grid3x2GapFill className="h-4 w-4" />
              </div>
              <div className="bg-neutral-100F flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neutral-100">
                <ListUl className="h-4 w-4" />
              </div>
            </div>
          </div>
          <main className="page_padding_x mt-1F flex w-full flex-row">
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

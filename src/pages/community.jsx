import Nav from "../components/layout/Nav"
import PageHead from "../components/misc/PageHead"
import Sidebar from "../components/layout/Sidebar"
import Footer from "../components/layout/Footer"
import GroupsBlock from "../components/blocks/GroupsBlock"
import { useDatabase } from "../context/DatabaseContext"
import { groupsPageIndex } from "../utils/constants/nav"
import FeaturedTagsBar from "../components/blocks/FeaturedTagsBar"
import MainDrawer from "../components/layout/MainDrawer"

const HomePage = () => {
  const { useGroupsPageGroups, useNewsPageArticles } = useDatabase()
  const { groupsPageGroups1 } = useGroupsPageGroups()
  const { newsPageArticles1 } = useNewsPageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={groupsPageIndex} />
      <div className="h-12" />

      {/* <FeaturedTagsBar articles={newsPageArticles1} /> */}
      <MainDrawer />

      <main className="page_width_wide mx-auto ml-60 flex w-full flex-row">
        <div className="main_content_container">
          {groupsPageGroups1 && (
            <GroupsBlock
              articles={groupsPageGroups1}
              title="Many awesome profiles"
            />
          )}
        </div>
        <Sidebar />
      </main>

      <Footer />
    </>
  )
}

export default HomePage

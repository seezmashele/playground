import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { Share } from "react-bootstrap-icons"
import Nav from "../../components/layout/Nav"
import PageHead from "../../components/misc/PageHead"
import Footer from "../../components/layout/Footer"
import { eventsPageIndex } from "../../utils/constants/nav"
import CustomStateUpdater from "../../components/lexical/CustomStateUpdater"
import PostSidebar from "../../components/layout/PostSidebar"
import MainDrawer from "../../components/layout/MainDrawer"
import { fetchEventBySlug } from "../../utils/firebase/fetchData"
import BodyWrapper from "../../components/wrappers/BodyWrapper"
import ContentFullColWrapper from "../../components/wrappers/ContentFullColWrapper"

const EventPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const [coverImage, setCoverImage] = useState(null)
  const [postTitle, setPostTitle] = useState(null)
  const [fetchedEditorStateJSON, setFetchedEditorStateJSON] = useState(null)

  const images = [
    "/avatars/image-1.png",
    "/avatars/image-2.png",
    "/avatars/image-3.png",
    "/avatars/image-4.png",
    "/avatars/image-5.png",
    "/avatars/image-6.png",
    "/avatars/image-7.png",
    "/avatars/image-8.png",
    "/avatars/image-9.png",
    "/avatars/image-10.png",
    "/avatars/image-11.png",
    "/avatars/image-12.png",
    "/avatars/image-13.png",
    "/avatars/image-14.png",
    "/avatars/image-15.png",
    "/avatars/image-16.png",
    "/avatars/image-17.png",
    "/avatars/image-18.png",
    "/avatars/image-19.png",
    "/avatars/image-20.png"
  ]
  const cardAuthor = "littledragon"
  // const cardOverview = "Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie."
  const authorImage = images[Math.floor(Math.random() * 20)]
  // const postAge = getPostAge(data)
  const postAge = "8 days ago"

  useEffect(() => {
    const getEvent = async slug => {
      let data = await fetchEventBySlug(slug)
      console.log("data", data)
      if (data) {
        setCoverImage(data.coverImage)
        setPostTitle(data.title)
        setFetchedEditorStateJSON(data.editorState)
      }
    }
    if (slug) getEvent(slug)
  }, [slug])

  // fix: clearing article state when moving between articles
  // useEffect(() => {
  //   // setCoverImage(null)
  //   // setPostTitle(null)
  //   // setFetchedEditorStateJSON(null)
  //   if (data && data.events && data.events.length) {
  //     const event = data.events[0]
  //     setPostTitle(event.title)
  //     setCoverImage(event.cover_image)
  //     setFetchedEditorStateJSON(event.editor_state)
  //   }
  // }, [slug, data])

  const onError = error => error

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={eventsPageIndex} />

      <MainDrawer />
      <BodyWrapper>
        <ContentFullColWrapper>
          <main className="w-full">
            <div className="page_padding_x flex max-w-[66rem] flex-row">
              <div className="mr-6 mt-6 max-w-3xl">
                <div className="card_containerf relative mt-1 mb-7 w-full flex-grow">
                  <div className="flex w-full select-none">
                    <div className="w-1/2f relative inline-block flex-grow">
                      {/* <div className="flex items-center text-sm">
                        <div className="card_author_image mr-2 h-10 w-10 overflow-hidden">
                          <img
                            src={authorImage}
                            alt=""
                            className="h-full w-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="inline_author mr-1 text-base font-semibold leading-tight">
                            The Real Slim Shadee
                          </div>
                          <div className="inline_author text-sm text-neutral-500">
                            @{cardAuthor}
                          </div>
                        </div>
                      </div> */}
                      <div className="card_title max-h-[6rem]f mt-4f overflow-hidden text-3xl font-bold hover:cursor-default hover:no-underline">
                        {postTitle}
                      </div>

                      <div className="light_text_colorf mt-3 flex items-center text-xs text-neutral-700">
                        <div className="flex flex-grow items-center uppercase">
                          <span className="inline_publish_time">
                            Posted: 9 Aug 2022
                          </span>
                          <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
                          <div className="box_radius px-1 pb-0.5">
                            Updated 14 June 2023
                          </div>
                        </div>
                        <div className="text-neutral- flex space-x-1">
                          <div className="rounded-lg bg-neutral-100 p-1 px-2">
                            Gaming
                          </div>
                          <div className="rounded-lg bg-neutral-100 p-1 px-2">
                            Anime
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex space-x-3">
                        {/* <div className="box_radius flex cursor-pointer items-center space-x-3 bg-neutral-50 py-2 px-3">
                      <HeartFill />
                      <div className="text-sm">Like</div>
                    </div> */}
                        <div className="image_bg box_radius max-w-xlf relative top-0 left-0 mt-3 inline-block h-[27rem] w-full overflow-hidden">
                          <img
                            draggable="false"
                            className="absolute left-0 h-full w-full object-cover"
                            src={coverImage}
                            alt={postTitle}
                          />
                        </div>
                      </div>
                      <div className="box_radius bg-neutral-50F flex cursor-pointer items-center space-x-3 rounded-full border py-2 px-3 transition-shadow hover:shadow-md">
                        <Share />
                        <div className="text-sm">Share</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full flex-grow">
                  <div className="text-[1.05rem]F leading-relaxedF max-w-xlF mr-0 ml-auto block w-full pr-5">
                    <LexicalComposer
                      initialConfig={{ editable: false, onError }}
                    >
                      <PlainTextPlugin
                        contentEditable={<ContentEditable className="" />}
                      />
                      <CustomStateUpdater
                        editorStateJSON={fetchedEditorStateJSON}
                      />
                    </LexicalComposer>
                  </div>
                  <div className="border_color--main mt-5 w-full border-b" />
                </div>
                <div className="h-52" />
              </div>
              <PostSidebar authorName={cardAuthor} authorImage={authorImage} />
            </div>
          </main>
        </ContentFullColWrapper>
      </BodyWrapper>
      <Footer />
    </>
  )
}

export default EventPage

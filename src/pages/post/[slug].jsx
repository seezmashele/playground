import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client/react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { ArrowDown, Share } from 'react-bootstrap-icons'
import Nav from '../../components/layout/Nav'
import Footer from '../../components/layout/Footer'
import PageHead from '../../components/misc/PageHead'
import { GET_ARTICLE } from '../../utils/graphql/Queries'
import { articlesPageIndex } from '../../utils/constants/nav'
import CustomStateUpdater from '../../components/lexical/CustomStateUpdater'
import Sidebar from '../../components/layout/Sidebar'
import MainDrawer from '../../components/layout/MainDrawer'

const EventPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const [coverImage, setCoverImage] = useState(null)
  const [postTitle, setPostTitle] = useState(null)
  const [fetchedEditorStateJSON, setFetchedEditorStateJSON] = useState(null)

  const images = [
    '/avatars/image-1.png',
    '/avatars/image-2.png',
    '/avatars/image-3.png',
    '/avatars/image-4.png',
    '/avatars/image-5.png',
    '/avatars/image-6.png',
    '/avatars/image-7.png',
    '/avatars/image-8.png',
    '/avatars/image-9.png',
    '/avatars/image-10.png',
    '/avatars/image-11.png',
    '/avatars/image-12.png',
    '/avatars/image-13.png',
    '/avatars/image-14.png',
    '/avatars/image-15.png',
    '/avatars/image-16.png',
    '/avatars/image-17.png',
    '/avatars/image-18.png',
    '/avatars/image-19.png',
    '/avatars/image-20.png'
  ]
  const cardAuthor = 'littledragon'
  // const cardOverview = "Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie."
  const authorImage = images[Math.floor(Math.random() * 20)]
  // const postAge = getPostAge(data)
  const postAge = '8 days ago'

  const { data } = useQuery(GET_ARTICLE, {
    variables: { slug }
  })

  const onError = (error) => error

  // fix: clearing article state when moving between articles
  useEffect(() => {
    setCoverImage(null)
    setPostTitle(null)
    setFetchedEditorStateJSON(null)

    if (data && data.articles && data.articles.length) {
      const article = data.articles[0]
      setPostTitle(article.title)
      setCoverImage(article.cover_image)
      setFetchedEditorStateJSON(article.editor_state)
    }
  }, [data])

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={articlesPageIndex} />

      <div className="mx-auto ml-56 flex  w-full max-w-5xl">
        <MainDrawer />
        <main className="page_width_wide page_padding_xF mx-auto mt-0 w-full">
          <div className=" flex flex-row">
            <div className="main_content_container mt-16">
              <div className="card_container relative mt-1 mb-7 w-full flex-grow">
                <div className="flex w-full select-none space-x-10">
                  <div className="relative inline-block w-1/2 flex-grow">
                    <div className="flex items-center text-sm">
                      <div className="card_author_image mr-2 h-10 w-10 overflow-hidden">
                        <img
                          src={authorImage}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="inline_author mr-1 text-base font-bold leading-tight">
                          The Real Slim Shadee
                        </div>
                        <div className="inline_author text-neutral-500">
                          @{cardAuthor}
                        </div>
                      </div>
                    </div>
                    <div className="card_title mt-2 max-h-[6rem] overflow-hidden text-2xl font-bold hover:cursor-default hover:no-underline">
                      {postTitle}
                    </div>
                    {/* <div className="h-12 mt-3.5 w-full max-w-xl overflow-hidden truncateF text-smF leading-normal">
            {cardOverview}
          </div> */}
                    <div className="light_text_color mt-3 flex hidden items-center text-xs">
                      <span className="inline_publish_time">
                        {postAge || 'a long time ago'}
                      </span>
                      <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
                      <div className="box_radius px-1 pb-0.5">gaming</div>
                    </div>
                    <div className="mt-5 flex space-x-3">
                      {/* <div className="box_radius flex cursor-pointer items-center space-x-3 bg-neutral-50 py-2 px-3">
                      <HeartFill />
                      <div className="text-sm">Like</div>
                    </div> */}
                      <div className="image_bg box_radius relative top-0 left-0 mt-5 inline-block h-64 w-full max-w-xl overflow-hidden">
                        <img
                          draggable="false"
                          className="absolute left-0 h-full w-full object-cover"
                          src={coverImage}
                          alt={postTitle}
                        />
                      </div>
                      <div className="box_radius bg-neutral-50F flex cursor-pointer items-center space-x-3 rounded-full border py-2 px-3 transition-shadow hover:shadow-md">
                        <Share />
                        <div className="text-sm">Share</div>
                      </div>
                      <div className="box_radius hover:shadow-mdF borderF flex cursor-pointer items-center space-x-1.5 rounded-full bg-neutral-50 py-2 px-3 transition-shadow hover:bg-neutral-100">
                        <div className="text-sm font-bold">12</div>
                        <div className="text-sm">Comments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block w-full flex-grow">
                <div className="text-[1.05rem]F leading-relaxedF max-w-xlF mr-0 ml-auto block w-full pr-5">
                  <LexicalComposer initialConfig={{ editable: false, onError }}>
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
            <Sidebar />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default EventPage

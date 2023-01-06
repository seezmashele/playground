import Link from 'next/link'
import { Calendar2Event } from 'react-bootstrap-icons'
import ListArticleCardLoader from '../loaders/ListArticleCardLoader'
import { getPostAge } from '../../utils/helpers/time'

const CategoryCard = ({ data, isLastItem = false }) => {
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
  const cardTitle = data.title
  const cardImage = data.cover_image
  const cardLink = data.slug ? `/event/${data.slug}` : '/'
  const cardTags = data.tags
  const cardAuthor = data.author ? data.author : 'Miss Diablo'
  const cardOverview = data.overview
  const authorImage = images[Math.floor(Math.random() * 20)]
  const postAge = getPostAge(data)

  return data.placeholder ? (
    <ListArticleCardLoader isLastItem={isLastItem} />
  ) : (
    <div className="card_container w-fullF bg-neutral-200F relative mr-4 mb-5 w-54 flex-grow overflow-hidden">
      <Link
        href={cardLink}
        passHref
        className="box_radius relative top-0 left-0 inline-block h-36 w-full cursor-pointer overflow-hidden"
      >
        <div>
          <img
            draggable="false"
            className="image_bg absolute left-0 h-full w-full object-cover"
            src={cardImage}
            alt={cardTitle}
          />
        </div>
      </Link>
      <div className="space-x-10F flex w-full select-none">
        <div className="relative inline-block w-1/2 flex-grow">
          <div className="mt-2 flex text-sm">
            <div className="card_author_image mr-3 flex-shrink-0 items-start justify-start overflow-hidden">
              <img src={authorImage} alt="" className="h-full w-full" />
            </div>
            {/* <span className="inline_author mr-1 font-bold">itzJankMaster</span> */}
            <div className="">
              <Link href={cardLink} passHref>
                <div className="card_title mt-0 max-h-12 overflow-hidden pt-0 text-base leading-snug">
                  {cardTitle}
                </div>
              </Link>
              <div className="inline_author mt-2 text-xs text-neutral-700">
                {cardAuthor}
              </div>
              <div className="mt-0.5 mb-3 flex flex-row items-center space-x-3">
                {/* <div className="box_radius text-sm text-[#ff0000]">
                  <Calendar2Event />
                </div> */}
                <div className="select-none text-xs  text-neutral-700">
                  Mon, Jun 19, 2023
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-2 max-h-12 w-full max-w-xl overflow-hidden truncate text-sm leading-normal">
            {cardOverview}
          </div> */}
          <div className="light_text_color mt-3 flex hidden items-center text-sm">
            <span className="inline_publish_time text-xs">
              {postAge || 'a long time ago'}
            </span>
            <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
            <div className="box_radius px-1 pb-0.5 text-xs">gaming, meetup</div>
          </div>
          <div className="card_tags_container">
            {cardTags &&
              cardTags.map((item, index) => (
                <div
                  key={`articleCard${data.slug}${index}`}
                  className="card_tag"
                >
                  {item}
                  {index < cardTags.length - 1 && ','}
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* {!isLastItem && (
        <div className="border_color--main mt-4 w-full border-b" />
      )} */}
    </div>
  )
}

export default CategoryCard

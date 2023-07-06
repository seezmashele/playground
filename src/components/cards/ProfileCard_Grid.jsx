import Link from "next/link"
import { Calendar2Event, ChevronDown } from "react-bootstrap-icons"
import GridCard_Event from "../loaders/GridCard_Event"
import { getPostAge } from "../../utils/helpers/time"

const ProfileCard_Grid = ({ data, isLastItem = false }) => {
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
  const cardTitle = data.title
  const cardImage = data.coverImage
  const cardLink = data.slug ? `/event/${data.slug}` : "/"
  const cardTags = data.tags
  const cardAuthor = data.author ? data.author : "doctordisrespect"
  const cardOverview = data.overview
  const authorImage = images[Math.floor(Math.random() * 20)]
  const postAge = getPostAge(data)

  return data.placeholder ? (
    <GridCard_Event isLastItem={isLastItem} />
  ) : (
    <div className="card_container relative mr-4 mb-4 flex w-64 flex-grow-0 flex-col items-center overflow-hidden rounded-lg border p-3">
      <div className="space-between flex w-full items-center">
        <Link
          href={cardLink}
          passHref
          className="box_radiusF relative top-0 left-0 mr-4 inline-block h-24 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-full"
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
        <div className="bg-neutral-100f mr-0 ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border hover:bg-neutral-50">
          <ChevronDown />
        </div>
      </div>
      <div className="space-x-10F flex w-full select-none">
        <div className="relative inline-block w-1/2 flex-grow">
          <div className="mt-2 flex text-sm">
            {/* <span className="inline_author mr-1 font-bold">itzJankMaster</span> */}
            <div className="">
              <Link href={cardLink} passHref>
                <div className="card_title text-centerf mt-1 max-h-12 overflow-hidden pt-0 text-base leading-snug">
                  {cardTitle}
                </div>
              </Link>
              <div className="mt-2 flex flex-row items-center">
                <div className="inline_author text-xs text-neutral-700">
                  {cardAuthor}
                </div>
                <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
                <div className="select-none text-xs  text-neutral-700">
                  Pretoria
                </div>
                {/* <div className="box_radius text-sm text-[#ff0000]">
                  <Calendar2Event />
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="mt-2 max-h-12 w-full max-w-xl overflow-hidden truncate text-sm leading-normal">
            {cardOverview}
          </div> */}
        </div>
      </div>
      {/* {!isLastItem && (
      <div className="border_color--main mt-4 w-full border-b" />
      )} */}
    </div>
  )
}

export default ProfileCard_Grid

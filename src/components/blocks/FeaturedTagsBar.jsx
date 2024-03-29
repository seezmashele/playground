import Link from "next/link"

const FeaturedTagsBar = () => {
  const tempTags = [
    "Valorant",
    "Apex Legends",
    "Twitch",
    "YouTube",
    "Overwatch",
    "MMO",
    "Fifa",
    "Sandbox",
    "Indie",
    "Tournament",
    "Guide",
    "Rocket League",
    "Sea of Thieves",
    "Minecraft",
    "Dota",
    "Rust",
    "GTA",
    "V Rising",
    "Vanguard",
    "Cyberpunk",
    "Skyrim",
    "Announcement",
    "Cosplay"
  ]
  const tempTags2 = tempTags.splice(9)
  tempTags2.splice(15)

  return (
    <div className="mt-2.5 flex h-10 w-full items-center px-7">
      <div className="flex h-9 w-full flex-grow flex-wrap space-x-3 overflow-hidden">
        {tempTags2 &&
          tempTags2.map((item, index) => (
            <Link href="/" key={`featuredTag${index}`}>
              <div className="box_radius flex-shrink-0F flex-growF borderF bg-[#fffafa]F text-[#dd0000]F w-52F mb-10 flex h-8 cursor-pointer items-center justify-center overflow-hidden bg-neutral-150 transition-colors hover:bg-neutral-300">
                <p className="mt-2.5 h-full w-full truncate px-3 pb-2 text-sm leading-snug">
                  {item}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default FeaturedTagsBar

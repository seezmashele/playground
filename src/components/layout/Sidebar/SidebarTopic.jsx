import Link from 'next/link'

const SidebarSearchItem = ({ item }) => {
  const linkURL = '/category/example'
  return (
    <Link href={linkURL} passHref>
      <div className="box_radius border_color--main rounded-fullF borderF transition-shadowF cursor-pointer select-none items-center bg-neutral-100 px-3 pb-2 pt-1.5 align-middle text-sm transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-600">
        {item}
      </div>
    </Link>
  )
}

export default SidebarSearchItem

const SectionTitle = ({ title = '' }) => (
  <div className="pt-5 pb-5">
    <h2 className="pointer-events-none select-none truncate whitespace-nowrap align-middle text-sidebar_card_title font-semibold leading-7">
      {title}
    </h2>
    {/* <div className="border_color--main border-bF mb-4 w-full" /> */}
  </div>
)

export default SectionTitle

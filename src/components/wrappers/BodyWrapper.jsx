const BodyWrapper = ({ children }) => (
  <div className="mt-14 flex h-full flex-row">
    {/* This creates space on the left for the drawer */}
    <div className="bg-slate-500f w-64" />
    <div className="bg-yellow-400f w-full">{children}</div>
  </div>
)

export default BodyWrapper

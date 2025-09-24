
const BaseLayout = (props) => {
  const {children, style = "", height="h-screen"} = props
  return (
    <div className={`relative w-full ${height} flex flex-col px-10 pt-[5.5rem] ${style}`}>
      {children}
    </div>
  )
}

export default BaseLayout

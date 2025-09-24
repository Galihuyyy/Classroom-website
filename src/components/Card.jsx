const Card = (props) => {
  const {children, width = "w-auto", bg = "bg-white", height = "h-fit", rounded = 'rounded-lg', shadow = "drop-shadow-[0_0_7px_rgba(0,0,0,.2)]"} = props
  return (
    <div className={`relative card ${width} ${bg} font-[Poppins] px-2 ${height} py-3 ${shadow} ${rounded}`}>
        {children}
    </div>
  )
}

export default Card

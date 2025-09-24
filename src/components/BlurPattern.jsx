
const BlurPattern = (props) => {
    const {position = "left-0 top-0",background} = props
  return (
      <div className={`absolute w-30 h-30 md:w-40 md:h-40 ${position} ${background} blur-2xl md:blur-3xl z-1`}></div>
  )
}

export default BlurPattern

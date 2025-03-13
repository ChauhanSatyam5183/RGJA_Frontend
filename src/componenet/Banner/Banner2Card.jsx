
function Banner2Card({image}) {
  return (
    <>
      <div
  className="card bg-base-100 w-20 h-20 md:w-40 md:h-44 shadow-sm hover:cursor-pointer"
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
</div>
    </>
  )
}

export default Banner2Card;

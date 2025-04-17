import React, { useRef } from "react"

const ExtraList = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const scrollByItem = (direction: "left" | "right") => {
    if (scrollRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full relative">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-black text-white px-2 py-1"
        onClick={() => scrollByItem("left")}
      >
        ◀
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar z-20 scroll-smooth"
      >
        <div className="flex flex-nowrap">
          <ExtraAmenity innerRef={itemRef} />
          <ExtraAmenity />
          <ExtraAmenity />
          <ExtraAmenity />
          <ExtraAmenity />
          <ExtraAmenity />
          <ExtraAmenity />
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-black text-white px-2 py-1"
        onClick={() => scrollByItem("right")}
      >
        ▶
      </button>
    </div>
  )
}

export default ExtraList

// ✅ Accept `innerRef` as prop to get width
const ExtraAmenity = ({ innerRef }: { innerRef?: React.Ref<HTMLDivElement> }) => {
  return (
    <div
      ref={innerRef}
      className="shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-4 z-20"
    >
      <div className="h-full flex flex-col items-center justify-center text-center px-5 py-4 text-[14px] gap-y-[10px] bg-white/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-white">
        <div className="w-[60px] flex-none">
          <img
            src="https://sar.ecis.in/api/starestate/star_estate/amenities/badminton1new.webp"
            className="w-full h-auto object-cover"
          />
        </div>
        <p>Badminton Court</p>
      </div>
    </div>
  )
}

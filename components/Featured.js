import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="h-screen bg-[#d1411e] overflow-hidden relative">
      <div
        className="absolute w-1/4 h-1/4 top-0 bottom-0 m-auto cursor-pointer z-10"
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <img
          className="h-full w-full object-contain"
          src="/img/arrowl.png"
          alt=""
          layout="fill"
        />
      </div>
      <div
        className="w-[300vw] h-full flex transition duration-150 ease-in-out"
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className="w-[100vw] h-full relative" key={i}>
            <img src={img} alt="" className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
      <div
        className="absolute w-1/4 h-1/4 top-0 bottom-0 m-auto cursor-pointer z-10"
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <img
          className="h-full w-full object-contain"
          src="/img/arrowr.png"
          layout="fill"
          alt=""
        />
      </div>
    </div>
  );
};

export default Featured;

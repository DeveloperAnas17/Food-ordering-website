import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex bg-[#222]">
      <div className="flex-1 relative flex">
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className="flex  flex-2 p-10 justify-between">
        <div className="flex-1 px-5">
          <h2 className="text-[rgb(211, 211, 211)]">
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className="">
          <h1 className="text-[18px] text-[#b7903c]">FIND OUR RESTAURANTS</h1>
          <p className=" text-gray-200">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="text-gray-200">
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className="text-gray-200">
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className="text-gray-200">
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className="flex-1 px-5">
          <h1 className="text-[18px] text-[#b7903c]">WORKING HOURS</h1>
          <p className="text-gray-200">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="text-gray-200">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

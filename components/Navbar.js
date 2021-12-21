import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[100px] py-0 px-10 flex  items-center justify-between bg-[#d1411e] sticky top-0 z-50">
      <div className="flex flex-1 items-center ">
        <div className="bg-white h-10 w-10 p-2 rounded-full">
          <img src="/img/telephone.png" width="32" height="32" alt="" />
        </div>
        <div className="ml-4 text-white">
          <p className="text-sm font-semibold">Order Now!</p>
          <p className="text-md font-semibold">012 347823</p>
        </div>
      </div>
      {/* center */}
      <div className="flex items-center justify-center flex-grow ">
        <ul className="flex items-center list-none text-white ">
          <li className="list-item">Homepage</li>
          <li className=" list-item">Products</li>
          <li className="list-item">Menu</li>
          <img
            className="w-24 h-16 object-contain"
            src="./img/logo.png"
            alt=""
          />
          <li className="list-item">Events</li>
          <li className="list-item">Blog</li>
          <li className="list-item">Contact</li>
        </ul>
      </div>
      {/* last */}
      <div className="flex items-center flex-1 justify-end">
        <div className="flex items-center relative cursor-pointer">
          <img className=" h-8 w-8 " src="./img/cart.png" alt="" />
          <span className="absolute text-xs bg-white text-[#d1411e] h-4 w-4 flex items-center justify-center rounded-full -top-2 -right-1 font-bold">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

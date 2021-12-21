const PizzaCard = () => {
  return (
    <div className="  w-[30%] p-3 flex flex-col items-center justify-center ">
      <img className="h-40 w-40 object-contain" src="./img/pizza.png" alt="" />
      <h1 className="text-[#d1411e] font-bold text-[18px]">FIORI DI ZUCCA</h1>
      <span className="text-[18px ] font-bold text-[#666]">$19.90</span>
      <p className="text-center text-[#777]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;

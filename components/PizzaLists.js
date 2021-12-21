import PizzaCard from "./PizzaCard";

const PizzaLists = () => {
  return (
    <div className="py-5 px-3 flex flex-col items-center ">
      <h1>THE BEST PIZZA IN TOWN</h1>
      <p className="text-[24px] font-semibold text-[#b86b6b] w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti,
        animi accusamus dolorem voluptates est illo commodi, quod ipsa veritatis
        quas voluptatum perspiciatis, molestiae natus enim aspernatur. Ut
        consectetur et laboriosam nesciunt animi veritatis a.
      </p>

      <div className=" flex items-center justify-center flex-wrap">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaLists;

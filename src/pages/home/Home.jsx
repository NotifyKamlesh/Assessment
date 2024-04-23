import Card from "../../components/card/Card";
import CartDetails from "../../components/cartDetails/CartDetails";
import Filter from "../../components/filter/Filter";
import ProductSearch from "../../components/productSearch/ProductSearch";

const Home = () => {
  return (
    <section className="flex justify-between items-start w-full body-bg p-3">
      <div className="w-[80%] flex justify-between items-start  flex-wrap gap-y-3">
        <div className="flex justify-start items-center w-full gap-x-5 ">
          <Filter/>
          <ProductSearch/>
        </div>
        <div className="flex gap-4 justify-start items-start flex-auto flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <CartDetails />
    </section>
  );
};

export default Home;

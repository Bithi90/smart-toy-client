import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";
import TopProduct from "../TopProduct/TopProduct";
import Toys from "../Toys/Toys";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Toys></Toys>
            <TopProduct></TopProduct>
        </div>
    );
};

export default Home;
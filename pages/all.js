import PizzaList from "../components/PizzaList";
import axios from "axios";

export default function Home({ pizzaList }) {
    return (
<div className="container">
     <PizzaList pizzaList={pizzaList} /> 
</div>
    );
   
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;
  
    if (myCookie.token === process.env.TOKEN) {
      admin = true;
    }
  
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        pizzaList: res.data,
        admin,
      },
    };
  };
  


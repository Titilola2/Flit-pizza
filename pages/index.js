import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Body from "../components/Body"
import Advert from "../components/Advert"
import Services from "../components/Services"
import Strength from "../components/Strength";
import Testimonial from "../components/Testimonial";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Flit Pizza Ordering App</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body/>  
      <Advert/>
       <Services/>   
      <Strength/>  
       <Testimonial/>
     
      
      {<AddButton setClose={setClose} />}
     
      {!close && <Add setClose={setClose} />}
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

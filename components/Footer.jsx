import Image from "next/image";
import styles from "../styles/Footer.module.css";
import css from "../styles/Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.card}>
      <h1 className={styles.title}>INFORMATION</h1>
      <div className={styles.text}>
      <br /> Home  
      <br /> Blog  
      <br />    About Us  
      <br />    Menu  
      <br />     Contact Us
            </div>
            </div>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
        <h1 className={styles.title}>TOP ITEMS</h1>
          <p className={styles.text}>
       
                Pepperoni 
                <br />Swiss Mushroom 
                <br /> Barbeque Chicken 
                <br /> Vegetarian 
                <br />Ham & Cheese
          
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OTHERS</h1>
          <p className={styles.text}>
          Checkout 
          <br /> Cart 
          <br /> Product
          <br />  Locations 
          <br />   legal
            
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>SOCIAL MEDIA</h1>
          <p className={styles.text}>
          <div className={css.social}>
                    
                  
                </div>
            <br />
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

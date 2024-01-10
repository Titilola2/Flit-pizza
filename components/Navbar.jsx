import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import css from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { UilSearch } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons';


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
       <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/Logo.png" alt="" width={150} height={170} />
        </div>
        <div className={styles.texts}>
          <Image src="/img/redball.png" alt="" width={270} height={160} />          
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>HOME</li>
          </Link>
          <Link href="/all" passHref>
            <li className={styles.listItem}>PRODUCTS</li>
          </Link>
          <Link href="/product/213" passHref>
            <li className={styles.listItem}>PAGES</li>
          </Link>
          <Link href="/cart" passHref>
            <li className={styles.listItem}>BLOG</li>
          </Link>
          <Link href="/admin/login" passHref>
            <li className={styles.listItem}>CONTACT</li>
          </Link>
         
        </ul>
      </div>

      

      <Link href="/cart" passHref>
        <div className={styles.item}>
        <div className={css.search}>
            <UilSearch size="22" color="#000"/> 
            </div>
          <div className={styles.cart}>
          <UilShoppingCart size="32" color="blue" />
            
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>

       



     
    </div>
  );
};

export default Navbar;

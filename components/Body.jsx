// body.jsx
import Image from 'next/image'
import css from '../styles/Body.module.css'
import pizza1 from '../assets/pizza1.png'
import pizza2 from '../assets/pizza2.png'

import onion from '../assets/onion.png'
import { UilShoppingCart, UilSearch } from '@iconscout/react-unicons'

export default function Body() { // Fixed function name to be uppercase
    return (
        <div className={css.container}>
            {/* left side */}
             <div className={css.leftside}>
                <div className={css.bodyText}>
                    <span> Handmade, With an Extra Pinch of
                        <span style={{ color: "red" }}> Love</span>
                    </span>
                </div>

                <span className={css.miniText}>
                    Loren Ipsum is simply the dummy text of the printing and typesetting industry.
                </span>

                <button className={`btn ${css.btn}`}>
                    <UilShoppingCart size="22" color="white" /> ORDER NOW
                </button>
             </div>

            {/* right side */}
            <div className={css.right}>
                <div className={css.circleContainer}>
                    <div className={css.circle}></div>
                </div>

                 <div className={css.pizza}>
                    <div className={css.pizzaa}>
                      <div>
                       <Image src={pizza2} alt = "" layout='intrinsic' objectFit='cover'  width={200} height={200} />
                        </div>  
                    </div>
                    <div className={css.pizzab}>
                       <div>
                        <Image src={pizza1} alt = "" layout='intrinsic' objectFit='cover'  width={400} height={400} />
                         </div>
                     </div>
                     <div className={css.onion}>
                       <div>
                        <Image src={onion} alt = "" layout='intrinsic' objectFit='cover'  width={130} height={130} />
                        </div>
                     </div>
                </div>
            </div>


            {/*   second line */}
            
          
     </div>
    );
};

import css from '../styles/Services.module.css'
import pizza3 from '../assets/pizza3.png'
import Image from 'next/image'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.png'
import { UilShoppingCart} from '@iconscout/react-unicons'
import React from 'react'; 
import ReactStars from 'react-stars';

export default function Services() {
    return(
          <>
           <div className={css.heading}>
            <span> Popular Dishes</span>
            <span> Browse our Menu</span>
            <span></span>
           </div>

            {/* features */}
            <div className={css.services}>
                <div className={css.feature}>
                    <div className={css.ImageWrap}>
                        <Image src={p1} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>

                    <span>Burga Pizza   
                    <span style={{ color: "red" }}> $20</span>
                    </span>

                    <div className={css.stars}> 
                     <ReactStars 
                      count={5} 
                       size={24} 
                      color2={'#ffd700'} /> 
                        </div> 
                    <span>This is burga pizza</span>
                    <button className={`btn ${css.btn}`}>
                    <UilShoppingCart size="22" color="white" /> ORDER NOW
                </button>
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={p2} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>Burga Pizza   
                    <span style={{ color: "red" }}> $20</span>
                    </span>
                    
                    <div className={css.stars}> 
                     <ReactStars 
                      count={5} 
                       size={24} 
                      color2={'#ffd700'} /> 
                        </div> 
                    <span>This is burga pizza</span>
                    <button className={`btn ${css.btn}`}>
                    <UilShoppingCart size="22" color="white" /> ORDER NOW
                </button>
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={p3} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>New Pizza
                    <span style={{ color: "red" }}> $10</span>
                    </span>
                    <div className={css.stars}> 
                     <ReactStars 
                      count={5} 
                       size={24} 
                      color2={'#ffd700'} /> 
                        </div> 
                    <span>This is new pizza</span>
                    <button className={`btn ${css.btn}`}>
                    <UilShoppingCart size="22" color="white" /> ORDER NOW
                </button>
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={p3} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>New Pizza
                    <span style={{ color: "red" }}> $10</span>
                    </span>
                    <div className={css.stars}> 
                     <ReactStars 
                      count={5} 
                       size={24} 
                      color2={'#ffd700'} /> 
                        </div> 
                    <span>This is new pizza</span>
                    <button className={`btn ${css.btn}`}>
                    <UilShoppingCart size="22" color="white" /> ORDER NOW
                </button>
                </div>

            </div>
          </>
    )
};
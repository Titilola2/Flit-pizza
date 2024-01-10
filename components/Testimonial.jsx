import css from '../styles/Testimonial.module.css'
import Image from 'next/image'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpeg'
import t3 from '../assets/t3.jpeg'
import t4 from '../assets/t4.jpeg'

export default function Testimonial() {
    return(
          <>
           <div className={css.heading}>
            <span style={{ color: "red" }}> Customer Feedback</span>
            <span > Client Testimonial</span>
            <span></span>
           </div>

            {/* features */}
            <div className={css.strength}>
                <div className={css.feature}>
                    <div className={css.ImageWrap}>
                        <Image src={t1} alt="" objectFit='cover' layout='intrinsic'/>

                    </div>
                    <span>Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap</span>
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={t2} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry.It has survived not only five centuries but also the leap</span>
                   
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={t3} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span> Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry.It has survived not only five centuries but also the leap</span>
                    
                </div>

                <div className={css.feature}>
                <div className={css.ImageWrap}>
                        <Image src={t4} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>Takar Bowa</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry.It has survived not only five centuries but also the leap</span>
                   
                </div>

            </div>
          </>
    )
};
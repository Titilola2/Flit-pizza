import css from '../styles/Strength.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'

export default function Strength() {
    return(
          <><div className={css.All}>
           <div className={css.heading}>
            <span style={{ color: "red" }}> Our Strength</span>
            <span > Why We Are The Best?</span>
           </div>

            {/* features */}
            <div className={css.strength}>
                <div className={css.feature1}>
                    <div className={css.ImageWrap}>
                        <Image src={s1} alt="" objectFit='cover' layout='intrinsic'/>

                    </div>
                    <span>All kinds of Food</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry</span>
                </div>

                <div className={css.feature2}>
                <div className={css.ImageWrap}>
                        <Image src={s2} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>All kinds of Food</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry</span>
                   
                </div>

                <div className={css.feature3}>
                <div className={css.ImageWrap}>
                        <Image src={s3} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>All kinds of Food</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry</span>
                    
                </div>

                <div className={css.feature4}>
                <div className={css.Image}>
                        <Image src={s5} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                <div className={css.ImageWrap}>
                        <Image src={s4} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <span>All kinds of Food</span>
                    <span>Loren Ipsum is simply the dummy text of the printing and typesetting industry</span>
                   
                </div>

            </div>
            </div>
          </>
    )
};
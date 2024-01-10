import css from '../styles/Advert.module.css'
import pizza3 from '../assets/pizza3.png'
import garlic from '../assets/garlic.png'
import Image from 'next/image'

export default function Advert(){
    return ( 
        <div className={css.heading}>
            <div>
                <Image src={pizza3} alt = "" layout='intrinsic' objectFit='cover'  width={350} height={350} />
            </div>
            <div className={css.text}>
            <span  style={{ color: "Black" }} size={40}>  Daily fresh and always tasty </span>
            <span>  There are many variations of loren ipsum available but the majority halved </span>
            </div>
            <div>
                <Image src={garlic} alt = "" layout='intrinsic' objectFit='cover'  width={120} height={120} />
            </div>
        </div>

    )
};



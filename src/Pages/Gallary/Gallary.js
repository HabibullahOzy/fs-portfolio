import React from 'react';
import imgg from "../../assets/rectangle-2-2.png";
import imga from "../../assets/gallary1.png";
import imgl from "../../assets/gallary2.png";
import imgr from "../../assets/gallary3.png";
import './Gallary.css'

const Gallary = () => {




    return (
        <div>
            <h1 className='text-3xl m-10 font-semibold'>Gallary</h1>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5' >

                <img className='imgDesign' src={imgg} alt=''></img>
                <img className='imgDesign' src={imga} alt=''></img>
                <img className='imgDesign' src={imgl} alt=''></img>
                <img className='imgDesign' src={imgr} alt=''></img>
            </div>
        </div>
    );
};

export default Gallary;
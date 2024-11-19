import React from 'react';
import img1 from "../../assets/rectangle-5-10.png"
import img2 from "../../assets/rectangle-5-11.png"
import img3 from "../../assets/rectangle-5-18.png"
import img4 from "../../assets/rectangle-5-19.png"
import img5 from "../../assets/rectangle-5-20.png"
import img6 from "../../assets/rectangle-5-21.png"
import img7 from "../../assets/rectangle-5-22.png"
import img8 from "../../assets/rectangle-5-23.png"
import img9 from "../../assets/rectangle-5-6.png"
import img10 from "../../assets/rectangle-5-7.png"
import img11 from "../../assets/rectangle-5-8.png"
import img12 from "../../assets/rectangle-5-9.png"


const Skill = () => {

    const skills = [
        { img: img1, name: "git" },
        { img: img2, name: "gitHub" },
        { img: img3, name: "TansorFlow" },
        { img: img4, name: "Django" },
        { img: img5, name: "Kotlin" },
        { img: img6, name: "HTML" },
        { img: img7, name: "CSS" },
        { img: img8, name: "JavaScript" },
        { img: img9, name: "Python" },
        { img: img10, name: "Java" },
        { img: img11, name: "PHP" },
        { img: img12, name: "Apache" }
    ];


    return (


<div className="p-5">
            <h1 className="text-3xl font-semibold mb-10 text-center" id='Skill'>My Skills</h1>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="border border-sky-200 rounded-2xl p-5 flex flex-col items-center transition-transform hover:scale-105"
                    >
                        <img
                            className="w-32 h-32 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4"
                            src={skill.img}
                            alt={skill.name}
                        />
                        <p className="text-lg font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>




        // <div>
        //     <h1 className='text-2xl font-semibold m-10'>My Skills</h1>


        //     <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-[52px]'>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl lg:w-[210px] lg:h-[230px] sm:w-[100px] sm:h-[100px]'>
        //             <img className=' lg:w-[160px] lg:h-[160px] sm:w-[55.47px] sm:h-[55.47px]' src={img1} alt=''></img>
        //             <p>git</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img2} alt=''></img>
        //             <p>git</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img3} alt=''></img>
        //             <p>git</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img4} alt=''></img>
        //             <p>Django</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img5} alt=''></img>
        //             <p>Kit</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img6} alt=''></img>
        //             <p>HTML</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img7} alt=''></img>
        //             <p>CSS</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img8} alt=''></img>
        //             <p>JavaScript</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img9} alt=''></img>
        //             <p>Python</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img10} alt=''></img>
        //             <p>Java</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img11} alt=''></img>
        //             <p>PHP</p>
        //         </div>
        //         <div className='border p-5 border-spacing-8 border-4 border-sky-200 border-solid rounded-2xl w-[210px] h-[230px]'>
        //             <img className=' w-[160px] h-[160px]' src={img12} alt=''></img>
        //             <p>git</p>
        //         </div>
                
        //     </div>
        // </div>
    );
};

export default Skill;
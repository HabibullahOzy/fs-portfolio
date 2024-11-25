import React from 'react';
// import img1 from "../../assets/rectangle-2-2.png"

const Experience = () => {
    return (
        <div>
            <h1 className=' text-3xl font-semibold'>Experience</h1>

            <div className=''>
                <div className=' justify-between lg:flex m-12 md:flex sm:grid'>
                    <div>
                        <h2 className='font-semibold text-sky-500'>Daffodil International University</h2>
                        <p className='text-gray-400'>Ashulia,Savar,Smart city</p>
                    </div>
                    <div>
                        <h2 className=' font-bold'>Lecturer</h2>
                        <p className='text-gray-400'>January2021 to present</p>

                    </div>
                </div>



                <div className=' justify-between lg:flex m-12 md:flex sm:grid'>
                    <div>
                        <h2 className='font-semibold text-sky-500'>Apurba DIU Research and Development Lab</h2>
                        <p className='text-gray-400'>Ashulia,Savar,Smart city</p>
                    </div>
                    <div>
                        <h2 className=' font-bold'>Research Assistant</h2>
                        <p className='text-gray-400'>February 2021- August 2021</p>

                    </div>
                </div>




                <div className=' justify-between lg:flex m-12 md:flex sm:grid'>
                    <div>
                        <h2 className='font-semibold text-sky-500'>DIU NLP & Machine Learning Research LAB</h2>
                        <p className='text-gray-400'>Ashulia,Savar,Smart city</p>
                    </div>
                    <div>
                        <h2 className=' font-bold'> Lead Researcher (Natural language processing)</h2>
                        <p className='text-gray-400'>January 2019- August 2021</p>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Experience;
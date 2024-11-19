import React from 'react';

const Education = () => {
    return (
        <div id='Education'>
           <h1 className=' text-3xl font-semibold mt-10'>Education</h1> 

           <div className=' justify-between lg:flex m-12 md:flex sm:grid'>
                    <div>
                        <h2 className='font-semibold text-sky-500'>M.Sc. in Computer Science & University</h2>
                        <p className='text-gray-400'>Daffodil International University</p>
                    </div>
                    <div>
                        <h2 className=' font-bold'>CGPA: 4.00/4.00</h2>
                        <p className='text-gray-400'>May2022 - July2023</p>
                    </div>
                </div>



                <div className=' justify-between lg:flex m-12 md:flex sm:grid'>
                    <div>
                        <h2 className='font-semibold text-sky-500'>B.Sc. in Computer Science & University</h2>
                        <p className='text-gray-400'>Daffodil International University</p>
                    </div>
                    <div>
                        <h2 className=' font-bold'>CGPA: 3.94/4.00</h2>
                        <p className='text-gray-400'>May2017 - May2021</p>
                    </div>
                </div>
        </div>
    );
};

export default Education;
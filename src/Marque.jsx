import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='bg-slate-300 p-2 flex gap-4'>
           <div className='bg-pink-700 text-white font-bold p-2'>Latest</div> 
           <Marquee pauseOnHover={true} className='space-x-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque pariatur ex aut numquam eos repudiandae, quaerat ipsum omnis. Veniam a dolor doloribus!</Marquee>
        </div>
    );
};

export default Marque;
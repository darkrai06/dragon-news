import React from 'react';
import { FaGoogle, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import swim from "./assets/swimming.png";
import classroom from "./assets/class.png";
import play from "./assets/playground.png";



const Right = () => {
    return (
        <div>
            <div className='flex flex-col gap-6'>
                <h2 className='font-extrabold text-xl'>Login with</h2>
                <button className='btn bg-white text-blue-500 gap-2'><FaGoogle />
                Login With Google</button>
                <button className='btn bg-white text-black gap-2'><FaGithub />
                Login with Github</button>
                </div> 
                <div>
                    <h2 className='font-extrabold text-xl my-6'>Find Us On</h2>
                    <div className='p-4 border border-black'><h2 className='font-extrabold flex gap-2 items-center'><FaFacebook className='text-blue-500' />
                    Facebook</h2></div>
                    <div className='p-4 border border-black'><h2 className='font-extrabold flex gap-2 items-center'><FaYoutube className='text-red-500' />
                    Youtube</h2></div>
                    <div className='p-4 border border-black'><h2 className='font-extrabold flex gap-2 items-center'><FaLinkedin className='text-blue-700' />
                    LinkedIn</h2></div>
                </div>
                <div className='flex flex-col gap-4 mt-6 p-6 bg-slate-300 rounded-lg'>
                    <h1 className='text-3xl font-extrabold'>Q Zone</h1>
                    <img src={swim} alt="" />
                    <img src={classroom} alt="" />
                    <img src={play} alt="" />
                </div>
        </div>
    );
};

export default Right;
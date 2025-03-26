import React from 'react';
import logo from './assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center'>
            <img src={logo} alt="" />
            <p className='text-gray-600 font-bold my-2'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd,MMMM do YYYY")}</p>
        </div>
    );
};

export default Header;
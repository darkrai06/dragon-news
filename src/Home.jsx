import React from 'react';
import Header from './Header';
import Marque from './Marque';
import Navbar from './Navbar';
import Catagory from './Catagory';
import Right from './Right';
import AllNews from './AllNews';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col gap-8 items-center mx-6'>
            <Header></Header>
            <section className='w-11/12'>
                <Marque></Marque>
            </section>
            <Navbar></Navbar>
            <main className='flex justify-between gap-8'>
            <aside className="w-1/4"><Catagory /></aside>
                <section className="w-1/2"><Outlet /></section>
                <aside className="w-1/4"><Right /></aside>

            </main>
        </div>
    );
};

export default Home;
import React from 'react';
import Hero from '@/components/Hero';
import Boxes from '@/components/Boxes';
import HomeProperties from '@/components/HomeProperties';
import connectBD from '@/config/database';


const HomePage = async () => {
    await connectBD();
    return (
        <>
           <Hero/>
           <Boxes/>
           <HomeProperties/>
        </>
    );
};


export default HomePage;
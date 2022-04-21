import React from 'react'

import Category from '../components/Category';

import Product from '../components/Product';
import Slider from '../components/Slider';

const Home = () => {
    return(
        <div>
       
        <Slider/>
        <Category/>
        <Product/>
        
        </div>
    );
}
export default Home
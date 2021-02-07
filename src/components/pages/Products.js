import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Products ()
{
    return (
        <>
            <h1 className="products">Products</h1>
            <Cards />
            <Footer />
        </>
    );
}
import React from "react";
import ProductNav from "./ProductNav";
import { useState, useEffect } from "react";
import { getData } from "../config.js/firebase";
import ProductCard from "./ProductCard";
import biryani from '../Images/biryani2 (2).jpg'
import Footer from "./Footer";

function ProductMenu() {
    const [res, setRes] = useState([])
    useEffect(() => {
        getAds()


    }, [])

    const getAds = async () => {
        const adsData = await getData()
        setRes(adsData)
    }

    if (!res.length) {
        return <div className='loader' ></div>
    }

    return (
        <>
            <ProductNav />
            <div className="main" >

                {
                    res.map(item => {
                        return <ProductCard tittle={item.restaurant_name} city={item.cuisine_type}  images={item.address.topImages} btn={item.id}  />
                    })
                }

            </div>


<Footer />
        </>
    )
}

export default ProductMenu 
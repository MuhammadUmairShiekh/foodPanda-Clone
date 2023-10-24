import React from "react";
import ProductNav from "./ProductNav";
import { useState, useEffect } from "react";
import { getData } from "../config.js/firebase";
import ProductCard from "./ProductCard";

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
                        return <ProductCard tittle={item.tittle} btn1={"Buy Me"}  images={item.image} btn={item.id}  />
                    })
                }

            </div>



        </>
    )
}

export default ProductMenu 
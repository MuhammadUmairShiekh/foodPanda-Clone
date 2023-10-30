import React, { useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import { getIdData } from "../config.js/firebase";
import { useParams } from "react-router-dom";
import biryani from '../Images/biryani2 (2).jpg'
import ProductNav from './ProductNav';
import Footer from './Footer';




function ProductDetail() {
    const [detail, setDetail] = useState('')
    const { city_id } = useParams()
    // console.log(city_id)
    useEffect(() => {
        resData()

    }, [])

    const resData = async () => {
        // getIdData(city_id)
        const resToData = await getIdData(city_id)
        setDetail(resToData)
    }

    if (!detail) {
        return <div className='loader' ></div>
    }


    const { opening_hours, restaurant_name, phone, menu } = detail
    const open = []
    for (let key in opening_hours) {
        open.push(`${key}: ${opening_hours[key]}`)
    }
    return (

        <>
            <ProductNav />

            <ProductPage tittle={restaurant_name} city={detail.address.city}
                mobile={phone} Location={detail.address.street}
                images={biryani}
                timeing={open.map(item => <p>{item}</p>)}
                menuCard={

                    <ul className="menuList1">
                        {menu.map(item => {
                            return (
                                <li>{item.item} {"Rs" + " " + item.price + " /-" } </li>
                            )
                        })}

                    </ul>
                }
            />

<Footer />

        </>
    )
}

export default ProductDetail
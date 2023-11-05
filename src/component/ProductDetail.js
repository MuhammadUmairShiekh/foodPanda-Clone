import React, { useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import { getIdData } from "../config.js/firebase";
import { useParams } from "react-router-dom";
import biryani from '../Images/biryani2 (2).jpg'
import ProductNav from './ProductNav';
import Footer from './Footer';
import { addCardToStore } from "../Store/card";
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'






function ProductDetail() {
    const [detail, setDetail] = useState('')
    const { city_id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        resData()

    }, [])

    const resData = async () => {
        const resToData = await getIdData(city_id)
        setDetail(resToData)
    }
    const { opening_hours, restaurant_name, phone, menu } = detail
    const open = []
    for (let key in opening_hours) {
        open.push(`${key}: ${opening_hours[key]}`)
    }

    // for (let i in menu_categories) {
    //     menu_categories.category_name[i].items
    //     console.log(menu_categories.category_name[i].items
    //     )
    // }

    const addToCard = (item) => {
        dispatch(addCardToStore(item))
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
        // console.log(dispatch)
    }
    if (!detail) {
        return <div className='loader'></div>
    }
    return (

        <>
            <ProductNav />

            <ProductPage tittle={restaurant_name} city={detail.address.city}
                mobile={phone} Location={detail.address.street}
                // images={biryani}
                timeing={open.map(item => <p>{item}</p>)}
                menuCard={

                    <ul className="menuList1">
                        {menu.map(item => {
                            return (
                                <li> <img src={item.item_image_url} />
                                    <p>{item.item}</p>
                                    <p>{"Rs" + " " + item.price + " /-"}</p>
                                    <button onClick={() => addToCard(item)} >Add To Card </button>
                                </li>
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
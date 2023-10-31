import { NavLink } from "react-router-dom"

function ProductCard(props) {
    const { images, tittle, price, city, descrip, btn, btn1 } = props


    return (
        <div  className="main">

            <div className="card">
                <NavLink to={btn}><div className="card-image1"> <img src={images} /> </div></NavLink>
                <div className="category">{tittle}</div>
                <div className="city"> $$$ {city}</div>

            </div>

        </div>
    )
}

export default ProductCard

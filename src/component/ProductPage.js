import React from 'react';
import menu from "../Images/menu.png"

function ProductPage(props) {
	const { images, tittle, city, Location, timeing, menuCard, mobile } = props
	return (
		<>
			<div className='resto' >

				<div className="card1">

					<div className="card-image"> <img src={images} /> </div>
					<div className="heading"> City: {city}
						<div className="author2"> TITTE: <span class="name ">{tittle}</span></div>
						{/* <div className="author1"> DESCRIPTION: <br /> <span class="name "></span></div> */}
						<div className="author1"> Order Now: <span class="name ">{mobile}</span></div>
						{/* <div className="author1"> condition: <br /> <span class="name ">{condition}</span></div> */}
						<div className="author1"> Location: <span class="name ">{Location}</span></div>

					</div>

				</div>


				<div>
					<div className='menuList'>
						<img src={menu} width={40} />
						<h3>Our Menu</h3>
						<p>{menuCard}</p>
						<div>
							<h3>
								Timeing Mention Below
							</h3>

							<p>
								{timeing}
							</p>
						</div>
					</div>
				</div>
				
			</div>


		</>
	)
}

export default ProductPage
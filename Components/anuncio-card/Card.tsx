import { Component } from 'react'
import './Card.css'

export class Card extends Component {
	render() {
		return (
			<section>
				<div className="content">
					<img
						src="./chevrolet-tracker-rs-2024.png"
						alt=""
						className="image-content"
					/>
					<div className="user-content">
						<img src="./user.png" alt="user" className="user-icon" />
					</div>
					<div className="info-content">
						<h3>Chevrolet Tracker 2024</h3>
						<hr />

						<div className="car-items">
							<div className="car-item">
								<img
									src="./cambio.svg"
									alt="speedometer"
									className="car-icon"
								/>
								<p>Manual</p>
							</div>
							<div className="car-item">
								<img src="./km.svg" alt="gas station" className="car-icon" />
								<p>91.436 km</p>
							</div>
							<div className="car-item">
								<img src="./gasolina.svg" alt="engine" className="car-icon" />
								<p>Gasolina</p>
							</div>
						</div>
					</div>

					<div className="button-actions-content">
						<button className="button-action">
							<img
								src="./location_on.svg"
								alt="location on"
								className="search-icon"
							/>
							Canasvieiras - Florianópolis
						</button>
						<button className="button-action">
							<img
								src="./calendar_month.svg"
								alt="calendar month"
								className="search-icon"
							/>
							Alugue Agora
						</button>
					</div>
				</div>
			</section>
		)
	}
}

export default Card

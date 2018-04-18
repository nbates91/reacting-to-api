import React, { Component } from 'react';

export default class Cardinfo extends Component {
	render() {
		let films = this.props.films.map(card => {
			return (
				<React.Fragment>
					<div className="card col-md-3" style={{ width: '18rem' }}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN_9wDvknPaqjQK1spdwR-oeJ2_qHBnWrDYco4FyxvJAt_-mR"
							alt="Card cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{card.title}</h5>
							<p className="card-text">{card.description.substring(0, 100)}...</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{card.director}</li>
							<li className="list-group-item">{card.producer}</li>
							<li className="list-group-item">{card.release_date}</li>
						</ul>
						<div className="card-body" />
					</div>
				</React.Fragment>
			);
		});
		return <div className="row">{films}</div>;
	}
}

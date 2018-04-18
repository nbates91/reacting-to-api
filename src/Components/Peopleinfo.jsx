import React, { Component } from 'react';

export default class Peopleinfo extends Component {
	render() {
		let people = this.props.people.map(card => {
			return (
				<React.Fragment>
					<div class="card m-3" style={{ width: '18rem' }}>
						<div class="card-header">{card.name}</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">{card.age}</li>
							<li class="list-group-item">{card.gender}</li>
							<a href={`https://ghibliapi.herokuapp.com/people/${card.id}`} class="btn btn-secondary">
								More info
							</a>
						</ul>
					</div>
				</React.Fragment>
			);
		});
		return <div className="row">{people}</div>;
	}
}

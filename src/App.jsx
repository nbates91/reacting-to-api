import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Cardinfo from './Components/Cardinfo';
import Peopleinfo from './Components/Peopleinfo';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			films: [],
			people: [],
			isLoaded: true,
			isLoaded2: true,
		};
		this.handleOnLoad = this.handleOnLoad.bind(this);
		this.handleOnLoad2 = this.handleOnLoad2.bind(this);
	}
	componentDidMount() {
		fetch('https://ghibliapi.herokuapp.com/films')
			.then(res => {
				return res.json();
			})
			.then(films => this.setState({ films }));
		fetch('https://ghibliapi.herokuapp.com/people')
			.then(res => {
				return res.json();
			})
			.then(people => this.setState({ people }));
	}
	handleOnLoad() {
		this.setState({
			isLoaded: false,
			isLoaded2: true,
		});
	}
	handleOnLoad2() {
		this.setState({
			isLoaded2: false,
			isLoaded: true,
		});
	}
	render() {
		if (this.state.isLoaded === false && this.state.isLoaded2 === true) {
			return (
				<React.Fragment>
					<div class="jumbotron jumbotron-fluid">
						<div class="container">
							<img
								src="http://yutaka.london/WA/wp-content/uploads/2016/09/Ghibli-650x380.jpg"
								className="w-100"
								alt=""
							/>
						</div>
					</div>
					<br />
					<div className="text-center">
						<button onClick={this.handleOnLoad} type="button" class="btn btn-outline-secondary">
							Load films!
						</button>
						<button onClick={this.handleOnLoad2} type="button" class="btn btn-outline-secondary">
							Load People!
						</button>
					</div>
					<br />
					<br />
					<div className="container">
						<Cardinfo films={this.state.films} />
					</div>
				</React.Fragment>
			);
		} else if (this.state.isLoaded === true && this.state.isLoaded2 === false) {
			return (
				<React.Fragment>
					<div class="jumbotron jumbotron-fluid">
						<div class="container">
							<img
								src="http://yutaka.london/WA/wp-content/uploads/2016/09/Ghibli-650x380.jpg"
								className="w-100"
								alt=""
							/>
						</div>
					</div>
					<br />
					<div className="text-center">
						<button onClick={this.handleOnLoad} type="button" class="btn btn-outline-secondary">
							Load films!
						</button>
						<button onClick={this.handleOnLoad2} type="button" class="btn btn-outline-secondary">
							Load People!
						</button>
					</div>
					<br />
					<br />
					<div>
						<Peopleinfo people={this.state.people} />
					</div>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<img
								src="http://yutaka.london/WA/wp-content/uploads/2016/09/Ghibli-650x380.jpg"
								className="w-100"
								alt=""
							/>
						</div>
					</div>
					<br />
					<div className="text-center">
						<button onClick={this.handleOnLoad} type="button" className="btn btn-outline-secondary">
							Load films!
						</button>
						<button onClick={this.handleOnLoad2} type="button" className="btn btn-outline-secondary">
							Load People!
						</button>
					</div>
					<br />
					<br />
				</React.Fragment>
			);
		}
	}
}

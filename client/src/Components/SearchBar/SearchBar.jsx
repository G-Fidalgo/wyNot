import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
	state = {
		search: ''
	};

	filter = (e) => {
		const newState = { ...this.state };
		newState.search = e.target.value;
		this.props.pack.FilterName(newState.search); // filtre en packs
		this.setState(newState);
	};

	render() {
		return (
			<div className="divSearch">
				<input className="search" type="text" onChange={(e) => this.filter(e)} />
			</div>
		);
	}
}

export default SearchBar;


//<SearchBar FilterName={this.searchPack} /> en la vista de todos los packs
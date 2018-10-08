import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Shelf from '../Shelf';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			books: []
		};
	}

	componentDidMount() {
		BooksAPI.getAll()
		.then(response => {
			this.setState({ books: response });
		});
	}

	render() {
		return (
			''
		);
	}
}


export default Home
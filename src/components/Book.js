import React from 'react';
import star from '../icons/star.svg';
// import { Link } from 'react-router-dom';


export default class Book extends React.Component {
	createRating = (n) => {
		let rating = [];

		for (let i = 0; i < this.props.book.averageRating; i++) {
			rating.push(<img src={star} key={i}/>);
		}
		return rating;
	}

	render() {
		// display book component, original render function in App.js provided in the starter code was a huge help. Thanks!/
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ backgroundImage: `url(${ this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || '' })`}}/>
						<div className="book-shelf-changer">
							<select value={this.props.book.shelf ? this.props.book.shelf : "none"} onChange={(e) => { this.props.updateBook(this.props.book, e.target.value) }}>
								<option value="move" disabled={true}>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want To Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<h3 className="book-title">{this.props.book.title}</h3>
					<div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "No Author"}</div>
					<div className="book-rating">
						{
							this.props.book.averageRating ? this.createRating() : "No Rating"
						}
					</div>
				</div>
			</li>
		);
	}
}
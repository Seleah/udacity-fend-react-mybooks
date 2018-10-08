import React from 'react';
import Book from './Book.js';


class Shelf extends React.Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ul className="books-display">
						{
							this.props.books.map((book, key) => <Book updateBook={this.props.updateBook} book={book} key={key} />)
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default Shelf;
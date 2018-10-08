import React from 'react';


class Book extends React.Component {
	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ backgroundImage: `url(${ this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || "" })`}}/>
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
					<div className="book-title">{this.props.book.title}</div>
					<div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "No Author"}</div>
				</div>
			</li>
		);
	}
}

export default Book;
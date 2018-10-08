import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book.js'



class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			results: [],
			query: ""
		}
	}

	componentDidMount() {
		BooksAPI.getAll()
		.then(response => {
			this.setState({ books: response });
		});
	}

	updateQuery = (query) => {
		this.setState({query: query}, this.submitSearch);
	}

	submitSearch() {
		//  When there is nothing in the input field on the search page,
		// show no results
		if(this.state.query === '' || this.state.query === undefined) {
			return this.setState({ results: [] });
		}

		//  If something is typed into the input field, attempt to search
		//  and show results
		BooksAPI.search(this.state.query.trim()).then(result => {
			//  If there are no matches, show no matches
			if(result.error) {
				return this.setState({ results: [] });
			} else {
				// If there are matches, for every match, display the book
				result.forEach(b => {
					// Check each result (b) against the books you already have on a
					// shelf. The point of a search is to ADD a book to your shelf, so
					// filtering out the books already on a shelf from the list of results would be best.
					let resultFiltered =  this.state.books.filter(B => B.id === b.id);
					// Make sure that the shelf for each book matches the shelf it is on, if you've put it on a shelf

					if(resultFiltered[0]) {
						b.shelf = resultFiltered[0].shelf;
						// console.log('before:', resultFiltered[0].shelf);
					}
				});
				return this.setState({ results: result});
			}
		});
	}

	updateBook = (book, shelf) => {
		BooksAPI.update(book, shelf)
		.then(response => {
			book.shelf = shelf;
			this.setState(state => (
				{
					books: (state.books.filter(b => b.id !== book.id).concat(book))
				}
			));
		});
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key} />)
						}
					</ol>
				</div>
			</div>
		);
	}
}


export default Search;
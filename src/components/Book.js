import PropTypes from 'prop-types'

// const shelves = [
//     {
//         id: '1',
//         shelfName: 'CurrentlyReading',
//         shelfDisplayName: 'Currently Reading'
//     },
//     {
//         id: '2',
//         shelfName: 'wantToRead',
//         shelfDisplayName: 'Want To Read'
//     },
//     {
//         id: '3',
//         shelfName: 'read',
//         shelfDisplayName: 'Read'
//     },
//     {
//         id: '4',
//         shelfName: 'none',
//         shelfDisplayName: 'None'
//     }]

const Book = ({ book, bookShelfUpdate }) => {
    return (
        <div className=" flex flex-col justify-center items-center shadow-xl hover:shadow-blue-500/50 mx-3 p-5 rounded-2xl">
            <div className="py-5">
                <img
                    className="shadow-2xl"
                    alt=""
                    src={book.imageLinks && book.imageLinks.smallThumbnail}
                    style={{ width: 128, height: 193 }}
                />
            </div>
            <select
                className="w-38 rounded-full bg-indigo-600 text-white text-xs cursor-pointer"
                defaultValue={book.shelf ? book.shelf : 'none'}
                onChange={(e) => bookShelfUpdate(book, e.target.value)}
            >
                <option disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            <div className="text-sm text-black w-96 text-center">
                {book.title}
            </div>
            <div className="text-sm text-slate-600">
                {book.authors && book.authors.join(', ')}
            </div>
        </div>
    )
}
export default Book

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookShelfUpdate: PropTypes.func.isRequired,
}

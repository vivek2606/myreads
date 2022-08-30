import { useState, useEffect, StrictMode } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksLibrary from './components/BookLibrary'
import SearchBooks from './components/SearchBooks'

const App = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        requestBooks()
    }, [])

    async function requestBooks() {
        const res = await BooksAPI.getAll()
        setBooks(res)
    }

    const bookShelfUpdate = async (book, destinationShelf) => {
        await BooksAPI.update(book, destinationShelf);
        const updatedBooks = books.filter((i) => (
            book.id !== i.id

        ))
        book.shelf = destinationShelf
        setBooks([...updatedBooks, book])

    }
    return (
        <StrictMode>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <BooksLibrary
                            books={books}
                            bookShelfUpdate={bookShelfUpdate}
                        />
                    }
                />
                <Route
                    path="/search"
                    element={
                        <SearchBooks
                            books={books}
                            bookShelfUpdate={bookShelfUpdate}
                        />
                    }
                />
            </Routes>
        </StrictMode>
    )
}
export default App

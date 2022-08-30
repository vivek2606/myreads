import { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

const localCache = {}

export default function useBookList(query) {
    const [bookList, setBookList] = useState([])
    const [status, setStatus] = useState('unloaded')

    useEffect(() => {
        if (!query) {
            setBookList([])
        } else if (localCache[query]) {
            setBookList(localCache[query])
        } else {
            requestBookList()
        }
        async function requestBookList() {
            setBookList([])
            setStatus('loading...')
            const res = await BooksAPI.search(query)
            if (res.error) {
                setBookList([])
            } else {
                localCache[query] = res || []
                setBookList(localCache[query])
                setStatus('loaded...')
            }
        }
    }, [query])

    return [bookList, status]
}

useBookList.propTypes = {
    query: PropTypes.string.isRequired,
}

import React, { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
    const { editBookById } = useContext(BooksContext);

    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }
    return (
        <div>
            <form className='book-edit' onSubmit={handleSubmit}>
                <lable>Title</lable>
                <input className='input' value={title} onChange={handleChange}></input>
                <button className='button is-primary'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default BookEdit

import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch("./booksData.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books.length);
    
    

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-10">Books</h2>
            <p>books length: {books.length}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                books.map((book) => <Book key={book.bookId} book={book}></Book>)
                
            }
            </div>

            {/* {
                books.map((book, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center space-x-4">
                            <img src={book.image} alt={book.title} className="w-48 h-48" />
                            <div>
                                <h2 className="text-2xl font-bold">{book.title}</h2>
                                <p className="text-xl">{book.author}</p>
                                <p className="text-xl">${book.price}</p>
                            </div>
                        </div>
                    )
                })
            } */}
        </div>
    );
};

export default Books;

/*
* 1. state to store book
* 2. useEffect
* 3. fetch to load data
* 4. set the data to the books state
*
*
*/
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDb";


const BookDetail = () => {

    //************************************* */
    // const param = useParams();// without distructuring
    // console.log(param);// output: {bookId: "1"} or output : {bookId: "2"} or output : {bookId: "3"}

    const {bookId} = useParams();// distructuring
    // console.log(bookId);// output : 1 or output : 2 or output : 3 // as a string// so parseInt() to convert it to number for compare ==
    //************************************* */


    const data = useLoaderData();
    // console.log(data);// output: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


    //json file e bookId number type, but useParams() return string type, so convert it to number
    const id = parseInt(bookId);

    const book = data.find(book=> book.bookId === id)


    // console.log(book, typeof data[0].bookId, typeof bookId, typeof id); // output: {bookId: 1, image: "https://images.unsplash.com/photo-1612833909247-4b3b3e3b3b7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", bookName: "The Alchemist", author: "Paulo Coelho", tags: Array(3), …}   "number" "string" "number"
    

    const {bookId: currentBookId, image, bookName, author, tags, category} = book;
    
    

    const handleMarkAsRead = (id) => {
        // console.log("Mark as Read");
        /**
         * 1. understand what to store or save: => bookId
         * 2. where to store or save: => database
         * 3. array, list, collection:
         * 4. check: if the book is already in the readList.
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */
        addToStoredReadList(id)
    }

    const handleMarkAsWishList = (id) => {
        // console.log("Add to Wishlist");
        addToStoredWishList(id);

    }

    return (
        <div>
            <h2>Book details: {bookId}</h2>
            <h2>Book details: {id}</h2>
            <img src={image} alt="" className="w-36" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
            <button onClick={()=>handleMarkAsWishList(bookId)} className="btn btn-accent ml-4">Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;
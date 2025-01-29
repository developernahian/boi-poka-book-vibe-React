import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState([])

    const allBooks = useLoaderData();

    //ideally we will directly get the read book list form the database

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        //worst way
        console.log(storedReadList, storedReadListInt, allBooks);

        //
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);
    // },  [allBooks]);



    const handleSort = (sortType) => {
        setSort(sortType)

        //
        if(sortType === 'No of pages'){
            const sortedReadList = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
            setReadList(sortedReadList)
        }
        if(sortType==='Ratings'){
            const sortedReadList = [...readList].sort((a,b)=>a.rating-b.rating)
            setReadList(sortedReadList)
        }

    }




    return (
        <div>
            <h2 className='text-3xl my-8'>Listed Books</h2>



            {/* daisy Ui dropdown */}
            <div className="dropdown">

                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort by'
                    }
                </div>

                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=> handleSort('No of pages')}><a>No of pages</a></li>
                </ul>
            </div>


            {/* React Tabs */}
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read {readList.length}</h2>

                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)

                    }

                    {/* {
                        readList.map(book => (
                            <div key={book.bookId} className='my-4 p-4 border border-gray-200 rounded-lg'>
                                <h3 className='text-xl'>{book.bookName}</h3>
                                <p className='text-gray-500'>{book.author}</p>
                            </div>
                        ))
                    } */}
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish lish</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;


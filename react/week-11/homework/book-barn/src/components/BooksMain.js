import React, {useState, useEffect} from "react";
import BookSearch from "./BookSearch";
// import BestBooks from "./BestBooks";
import AdList from "./AdList"

function BooksMain() {
    const [apiBooks, setApiBooks] = useState([])
    useEffect(() => {
        const allBooks = async () => {
            let response = await fetch("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json")
            let data = await response.json()
            setApiBooks(data)
        }
        allBooks()
    }, [])
    console.log(apiBooks)
    return (
        <>
        <div className="row m-0">
            <div className="col-8 d-flex justify-content-end p-2">
                <div>
                    <BookSearch />
                </div>
                {/* <div>
                    <BestBooks />
                </div> */}
            </div>
            <div className="col-4 p-2">
                <AdList lang={apiBooks.map(book => {
                    return book.language
                })}/>
            </div>
        </div>
        
        </>
    );
};

export default BooksMain;
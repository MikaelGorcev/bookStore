import React from "react";
import { TBookAdToBill } from "../../actions/action";
import { TypeBook } from "../../reducers/reducer";
import BookListItem from "../book-list-item/book-list-item";


const BookListView = ({books,onAddedToBill}:{books:TypeBook[],onAddedToBill:TBookAdToBill})=>{
    return(
        <ul>
        {books?.map((book)=>{
            return (<li key={book.id}><BookListItem book={book} onAddedToBill={()=>onAddedToBill(book.id)}/></li>)
        })}
    </ul>
    )
};

export default BookListView
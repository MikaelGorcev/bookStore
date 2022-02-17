import React from "react";
import { TypeBook } from "../../reducers/reducer";
import { BookActionTypes, TBookAdToBill } from "../../actions/action";
import "./book-list-item.css";



type fromTBookAdToBill = {
    ():{type:BookActionTypes.BOOK_ADD_TO_Bill,payload:number}
}

const BookListItem=({book,onAddedToBill}:{book:TypeBook,onAddedToBill:fromTBookAdToBill}):JSX.Element=>{
    const {title, author, pathToImg, price}= book;    
    return(
        <div className="containerForBook">
            <img src={pathToImg} width={"100px"} height={"144px"} alt="книжечка такая"/>
            <div className="descriptions">
                <div>Книга: {title},</div>
                <div>Автор: {author}</div>
                <div>Ценник: {price}Р</div>
                <button onClick={onAddedToBill}>добавить в покупки</button>
            </div>
        </div>
    )
};

export default BookListItem;
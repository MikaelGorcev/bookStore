import React, { useEffect, useRef } from "react";
import { TypeBook } from "../../reducers/reducer";
import { BookActionTypes,  } from "../../actions/action";
import { Transition } from "react-transition-group";
import "./book-list-item.css";



type fromTBookAdToBill = {
    ():{type:BookActionTypes.BOOK_ADD_TO_Bill,payload:number}
}



const BookListItem=({book,onAddedToBill}:{book:TypeBook,onAddedToBill:fromTBookAdToBill}):JSX.Element=>{
    const {title, author, pathToImg, price}= book; 
    const divRef=useRef<HTMLDivElement>();
    
    
    const testMotion = ()=>{
        
        divRef.current.style.opacity="1"
        divRef.current.style.transition="opacity 2s"
    }   
    useEffect(()=>{
        
        testMotion()
      
      
    },[])
    return(
        
        <div className="containerForBook">
            <Transition  in={true} timeout={5000} >
               {state=><img className={"animateImg "+state} src={pathToImg} width={"100px"} height={"144px"} alt="книжечка такая"/>}
            </Transition>
            <div ref={divRef} className="descriptions" style={{opacity:"0"}}>
                <div>Книга: {title},</div>
                <div>Автор: {author}</div>
                <div>Ценник: {price}Р</div>
                <button onClick={onAddedToBill}>добавить в покупки</button>
            </div>
        </div>
    )
};

export default BookListItem;
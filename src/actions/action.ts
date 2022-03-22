
import {TypeBook} from "../reducers/reducer"
import { IBookStoreService } from "../services/bookstore-services"


export enum BookActionTypes{
    BOOKS_LOADED='BOOKS_LOADED',
    BOOKS_REQUEST='BOOKS_REQUEST',
    BOOKS_ERROR='BOOKS_ERROR',
    BOOK_ADD_TO_Bill='BOOK_ADD_TO_Bill',
    BOOK_DECREASE_FOR_Bill='BOOK_DECREASE_FOR_Bill',
    BOOK_DELETE_ORDER='BOOK_DELETE_ORDE'
}


export interface Iaction{
    type:BookActionTypes;   //возможно надо будет переписать потому что для каждого экшена может быть свой интерфейс
    payload?
}



 const booksRequested=()=>({type:BookActionTypes.BOOKS_REQUEST})

 const booksError=(error:never)=>({type:BookActionTypes.BOOKS_ERROR,payload:error})

 const booksLoaded=(newBooks:TypeBook[]):Iaction=>({type:BookActionTypes.BOOKS_LOADED,payload:newBooks})

export type Tdispatch={
    (booksRequested:Iaction):void,
    (booksError:Iaction):void,
    (booksLoaded:Iaction):void,
   (bookAdToBuild:Iaction):void,
}

export type TBookAdToBill={(bookId:number):{type:BookActionTypes.BOOK_ADD_TO_Bill,payload:typeof bookId}}

export const bookAdToBill:TBookAdToBill = (bookId)=>({type:BookActionTypes.BOOK_ADD_TO_Bill,payload:bookId})

//211388

export const bookDecreaseForBill=(bookId:number)=>({type:BookActionTypes.BOOK_DECREASE_FOR_Bill,payload:bookId})
export const deleteOrder=(bookId:number)=>({type:BookActionTypes.BOOK_DELETE_ORDER,payload:bookId})

export const fetchBooks=(dispatch:Tdispatch,bookStService:IBookStoreService)=>()=>{
    dispatch(booksRequested());
    bookStService.getBooks().then((data:TypeBook[])=>{dispatch(booksLoaded(data))})
                             .catch((err:never)=>{dispatch(booksError(err))});
    
  }


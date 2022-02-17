import React from "react";
import BookListView from "./book-list-view";
import {connect} from "react-redux";
import {TypeBook, TypeBooklist, } from "../../reducers/reducer";
import { IBookStoreService} from "../../services/bookstore-services";
import {bookAdToBill, fetchBooks,Tdispatch, TBookAdToBill,} from "../../actions/action";
import withBookService from "../hoc/with-book-serv";
import Loader from "../loader/loader";
import ErrorView from "../error-view/errorView";



export interface IBooklist{
    loading:boolean;
    books:TypeBook[];
    fetchBooks():void
    error:boolean;
    bookStService:IBookStoreService;
    addToBill:TBookAdToBill;
}

// interface IBookState{
//     books:TypeBooks
// }
 class BooklistContainer extends React.Component<IBooklist> {

    
    componentDidMount(): void {
        this.props.fetchBooks() 
    }


    render(){
        const {books,loading,error,addToBill} = this.props;
        
        if (loading){return <Loader/>}
        if (error){return <ErrorView/>}
        return <BookListView books={books} onAddedToBill={addToBill} />
    }
};



interface IDispatchProps {fetchBooks():void,addToBill(id:number):void};

interface IBookStoreServiceConnect {bookStService:IBookStoreService};

const mapStateToProps=({bookList}:{bookList:TypeBooklist})=>{ 
    
    
   
    return {...bookList}    
}




const mapDispatchToProps=(dispatch:Tdispatch,{bookStService}:{bookStService:IBookStoreService})=>{
    
  return {
         fetchBooks:fetchBooks(dispatch,bookStService),
         addToBill:(id:number)=>dispatch(bookAdToBill(id)),  //тут что-то не то
            
    }                            //когда передавать колбэк а когда обьект?
}

export default withBookService<IBookStoreServiceConnect>(
    connect<TypeBooklist,IDispatchProps,IBookStoreServiceConnect>(mapStateToProps,mapDispatchToProps)(BooklistContainer)
    )
import React from "react";
import {BookStConsumer} from "../book-sev-context/book-store-context"

const withBookServ = ()=>(Wrapped)=>{
    
    return (props)=>{
        
        return (
            <BookStConsumer>
                {(bookStService)=>{
                  return <Wrapped {...props} bookStServ={bookStService}/>
                }}
            </BookStConsumer>
        )
    }
};

export default withBookServ;
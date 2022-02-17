
import React from "react";


import {BookStConsumer} from "../book-sev-context/book-store-context"

// function withSome<T extends someProperty = any>(React.ComponentType<T>): React.FC<T> | React.Component<T>;

// type someProperty = {
//   bookStService:TypeBooks
// }

const withBookService= <T extends unknown = any>(Wrapped:React.ComponentType<T>)=>(props:Omit<T,"bookStService">)=>{  
          return(
                  <BookStConsumer>
                      {
                        (bookStService)=>{
                        return <Wrapped {...(props as T)} bookStService={bookStService}/>
                        }
                      }
                  </BookStConsumer>
            )
        }


export default withBookService;
 


import {BookActionTypes,Iaction,} from "../actions/action"



 export  type TypeBook = {id:number,title:string,author:string,price:number;
        pathToImg:string;}

export type TypeState={
    booklist:TypeBooklist,
    orderList:TypeOrderList,
   
    
}
export type TypeBooklist={
    books:TypeBook[];
    loading: boolean;
    error:null;
}

export type TypeOrderList={
    cartItems:TItem[];
    orderTotal:number;
}

export type TItem={
    id:number,
    name:string,
    count:number,
    total:number
}


const initialState : TypeState={
    booklist:{
        books:[],
        loading: true,
        error:null,
    },
    orderList:{
        cartItems:[],
        orderTotal:0
    }
    
};
// type TypeUpdateBookList = Omit<TypeState,"orderList">;
// type TypeUpdateOrderList = Omit<TypeState,"booklist">;
const updateBooklist=(state:TypeState,action)=>{

    if (state === undefined) {
        return {
          books: [],
          loading: true,
          error: null
        };
      }

    switch(action.type){
        
        
        case BookActionTypes.BOOKS_ERROR:
            return{
                books:null,
                loading:false,
                error:action.payload,
            }

        case BookActionTypes.BOOKS_REQUEST:
            return {
                books:[],
                loading:true,
                error:null
            }

        case BookActionTypes.BOOKS_LOADED: 
            return {
                books:action.payload,
                loading:false,
                error:null
            };
       default:return state.booklist    
    }

}

const updateOrderlist=(state:TypeState,action)=>{

    switch(action.type){

    case BookActionTypes.BOOK_ADD_TO_Bill:
        console.log(state);
        
        return ourOrder(state,action,increaseItem,updateSetItems,action.payload);
         
    
     case BookActionTypes.BOOK_DECREASE_FOR_Bill:
         return ourOrder(state,action,decreaseItem,updateSetItems,action.payload);


     case BookActionTypes.BOOK_DELETE_ORDER:
        return ourOrder(state,action,resetCountItem,updateSetItems,action.payload)

    default:return state.orderList  
    }
}

type TypeUpdateSetItems = {(cartItems:TItem[],item:TItem,index:number):TItem[]}

const updateSetItems:TypeUpdateSetItems =(cartItems,item,index,)=>{


    if(index === -1){
        return    [ ...cartItems,item]
    }
    if(item.count===0){return cartItems=[
                ...cartItems.slice(0,index),
                ...cartItems.slice(index+1)
            ]}
    
    return cartItems=[
        ...cartItems.slice(0,index),
        item,
        ...cartItems.slice(index+1)
    ]
}

      
 
const decreaseItem=(book:TypeBook,findedItem={id:book.id,name:book.title,count:0,total:0}):TItem=>{
   const {count,total}=findedItem;
       
   return{   ...findedItem,
              count: count-1,
              total: total-book.price
              }}       


const increaseItem=(book:TypeBook,findedItem={id:book.id,name:book.title,count:0,total:0}):TItem=>{
    
    
    const {count,total}=findedItem;
                           
                    
        return{
            ...findedItem,
             count: count+1,
             total: total+book.price
         }
    
     }

const resetCountItem=(book,findedItem:TItem)=>{
    
        return{
            ...findedItem,
             count:0,
             
         }
    
     }
type TypeUpdateItem = {(book:TypeBook,findedItem:TItem):TItem}

     const ourOrder =(state:TypeState,action,updateItem:TypeUpdateItem,updateSetItems:TypeUpdateSetItems,bookId)=>{
                //const bookId=action.payload;//берет ИД из экшн креатора
                const book = state.booklist.books.find((book)=>book.id===bookId); //находит нужную книгу из стэйта
                console.log(book);
                
                
                const itemIndex:number = state.orderList.cartItems.findIndex((item)=>{return item.id===bookId}); //находит её индекс
                const findedItem:TItem = state.orderList.cartItems[itemIndex] //находит ее айтэм
                
                
                const newItem=updateItem(book,findedItem)
                
    
                 return{
                    orderTotal:0,
                    cartItems:updateSetItems(state.orderList.cartItems,newItem,itemIndex,)
                }
    }


const reducer=(state=initialState,action:Iaction)=>{

    switch(action.type){
        case BookActionTypes.BOOKS_LOADED: 
        case BookActionTypes.BOOKS_REQUEST:
        case BookActionTypes.BOOKS_ERROR: 
        return {
            ...state,
            bookList:updateBooklist(state,action),
        }

        case BookActionTypes.BOOK_ADD_TO_Bill:
        case BookActionTypes.BOOK_DECREASE_FOR_Bill:
        case BookActionTypes.BOOK_DELETE_ORDER:
        return {
            ...state,
            orderList:updateOrderlist(state,action)
        }
        default: return state;
    }


   
 };

export default reducer;
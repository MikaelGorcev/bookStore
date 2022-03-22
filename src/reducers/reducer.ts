
import {BookActionTypes,Iaction,} from "../actions/action"


export type TypeBook = {id:number,title:string,author:string,price:number;pathToImg:string;}


export type TItem={
    id:number,
    name:string,
    count:number,
    total:number
}

export type TypeInitialState = {
    stateForBook:TypeStateForBook,
    stateForOrder:TypeStateForOrder
}

export type TypeStateForBook={
    books:TypeBook[];
    loading: boolean;
    error:null;
}

export type TypeStateForOrder={
    cartItems:TItem[];
    orderTotal:number;
}
type TypeUpdateSetItems={
    (cartItems:TItem[],item:TItem,index:number):TItem[]
}

type TypeUpdateItem={
    (book:TypeBook,findedItem:TItem):TItem
}

const initialState:TypeInitialState ={
    stateForBook:{
        books:[],
        loading: true,
        error:null
    },
    stateForOrder:{
        cartItems:[],
        orderTotal:0
    }
};



const updateStateForBook=(state:TypeInitialState,action:Iaction)=>{
    switch(action.type){
        case BookActionTypes.BOOKS_ERROR:
            return{
                
                books:null,
                loading:false,
                error:action.payload,
            }

        case BookActionTypes.BOOKS_REQUEST:
            return {
                
                books:null,
                loading:true,
                error:null
            }

        case BookActionTypes.BOOKS_LOADED: 
            return {
                
                books:action.payload,
                loading:false,
                error:null
            };
        default:return state.stateForBook;
    }
}
const updateStateForOrder=(state:TypeInitialState,action:Iaction)=>{
    switch(action.type){
        case BookActionTypes.BOOK_ADD_TO_Bill:
           return ourOrder(state,action,increaseItem,updateSetItems,);
            
       
        case BookActionTypes.BOOK_DECREASE_FOR_Bill:
            return ourOrder(state,action,decreaseItem,updateSetItems,);


        case BookActionTypes.BOOK_DELETE_ORDER:
           return ourOrder(state,action,resetCountItem,updateSetItems)

        default:return state.stateForOrder;
    }
}


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

      
 
const decreaseItem:TypeUpdateItem=(book,findedItem={id:book.id,name:book.title,count:0,total:0})=>{
   const {count,total}=findedItem;
       
   return{...findedItem,
              count: count-1,
              total: total-book.price
              }}       


const increaseItem:TypeUpdateItem=(book,findedItem={id:book.id,name:book.title,count:0,total:0})=>{
    
    const {id,name,count,total}=findedItem;
               
                    
        return{
             id,
             name,
             count: count+1,
             total: total+book.price
         }
    
     }

const resetCountItem:TypeUpdateItem=(book,findedItem)=>{
    
        return{
             ...findedItem,
             count:0
         }
    
     }



const ourOrder =(state:TypeInitialState,action:Iaction,updateItem:TypeUpdateItem,updateSetItems:TypeUpdateSetItems,)=>{
    
        const {stateForBook:{books},stateForOrder:{cartItems}}=state;
        
            const bookId=action.payload;//берет ИД из экшн креатора
                    const book = books.find((book)=>book.id===bookId); //находит нужную книгу из стэйта
                    const itemIndex:number = cartItems.findIndex((item)=>{return item.id===bookId}); //находит её индекс
                    const findedItem:TItem = cartItems[itemIndex] //находит ее айтэм
                    
                    
                    const newItem=updateItem(book,findedItem,)
                    
                    const total=updateSetItems(cartItems,newItem,itemIndex).reduce((total,item)=>{return total+=item.total},0)
        
                     return{
                        orderTotal:total,
                        cartItems:updateSetItems(cartItems,newItem,itemIndex,)
                    }
        }

const reducer=(state=initialState,action:Iaction)=>{


        return{
            stateForBook:updateStateForBook(state,action),
            stateForOrder:updateStateForOrder(state,action)
        }
};

export default reducer;
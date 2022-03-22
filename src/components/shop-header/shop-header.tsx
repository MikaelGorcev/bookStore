
import  React from 'react';
import { connect } from 'react-redux';
import{TypeStateForOrder} from "../../reducers/reducer";
import "./shop-header.css"


const ShopHeader =({items})=>{
    
    const resItem=items.reduce((acum,item)=>{
        
        return {count:acum.count+=item.count,total:acum.total+=item.total}
        
    },{count:0,total:0})
    
    
    const{count,total}=resItem
    return(
        <div className='shop-header'>
            <span>Количество книг {count},</span><span>на сумму {total}</span>
        </div>
    )
}


const mapStateToProps = ({stateForOrder:{cartItems,orderTotal}}:{stateForOrder:TypeStateForOrder})=>({
    items:cartItems,
    total:orderTotal
})



export default connect(mapStateToProps,{})(ShopHeader);


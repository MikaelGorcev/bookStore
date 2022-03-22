import { connect } from "react-redux";
import { TItem, TypeStateForOrder } from "../../reducers/reducer";
import React from "react";
import { bookAdToBill, bookDecreaseForBill, deleteOrder } from "../../actions/action";
import "./shop-store.css";



type TShopStore={
    items:TItem[], 
    total:number,
    onIncrease:(id:number)=>void, 
    onDecrease:(id:number)=>void, 
    onDelete:(id:number)=>void
}

const ShopStore=({items,total, onIncrease, onDecrease, onDelete}:TShopStore)=>{

    

        const renderRow = (item:TItem,idx:number)=>{
            const {id,name,count,total}=item;
            return (
                <tr key={id}>
                    <td>{idx+1}</td>
                    <td>{name}</td>
                    <td>{count}</td>
                    <td>{total}p</td>
                    <td>
                        <button onClick={()=>onIncrease(id)}>+</button>
                        <button onClick={()=>onDecrease(id)}>-</button>
                        <button onClick={()=>onDelete(id)}>del</button>
                    </td>
                </tr>
            )
        }


    return(<>
            <div className="tableContainer">
                <table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(renderRow)}
                        
                    </tbody>
                </table>
            </div>
            <div> Всего {total}</div>
        </>
    )
}



const mapStateToProps = ({stateForOrder:{cartItems,orderTotal}}:{stateForOrder:TypeStateForOrder})=>({
    
    
    items:cartItems,
    total:orderTotal
})
const mapDispatchToProps = {
    onIncrease:bookAdToBill,
    onDecrease:bookDecreaseForBill,
    onDelete:deleteOrder,
    
}


export default connect(mapStateToProps,mapDispatchToProps)(ShopStore);
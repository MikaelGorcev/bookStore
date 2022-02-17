import React from "react";
import BooklistContainer from "../../book-list/book-list-container";
import ShopStore from "../../shop-store/shop-store";
const HomePage=():any=>{
    return(
        <>
        <div>Домашняя страница</div>
        <BooklistContainer/>
        <ShopStore/>
        </>
    )
}

export default HomePage
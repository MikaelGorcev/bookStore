import React from "react";
import BooklistContainer from "../../book-list/book-list-container";
import ShopStore from "../../shop-store/shop-store";
import "./catalog-page.css"
const CatalogPage=():any=>{
    return(
        <div className="catalog-page">
            <div>Вот и каталог</div>
            <BooklistContainer/>
            <ShopStore/>
        </div>
    )
}

export default CatalogPage
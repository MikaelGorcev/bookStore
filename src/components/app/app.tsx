import React from "react";
import Header from "../header/header";
import {IBookStoreService} from "../../services/bookstore-services"
import { Routes,Route} from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import CardPage from "../pages/card-page/card-page";
import ShopHeader from "../shop-header/shop-header";
type AppProps = {
    bookStService:IBookStoreService
    
}

class App extends React.Component/*<AppProps>*/{
    
    render(){
    //   const {bookStService}=this.props;
    //     console.log(bookStService.getBooks());
        return (
            <>
                <div>Маленький "книжный"</div>
                <ShopHeader/>
                <Header/>
                
                <Routes>
                    <Route path="/" element={<div>start page</div>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/card" element={<CardPage/>}/>
                </Routes>
            </>
        )
    }
};

export default App


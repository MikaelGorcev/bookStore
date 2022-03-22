import React, { createRef } from "react";
import NavBlock from "../nav-block/navBlock";
import { Routes,Route} from "react-router-dom";
import HomePage from "../pages/home-page/catalog-page";
import CardPage from "../pages/card-page/card-page";
import ShopHeader from "../shop-header/shop-header";
import "./app.css";




class App extends React.Component/*<AppProps>*/{
    
    
    render(){
    
        return (
            <div className="app-container">
                <div className="substrate">
                    <div className="app-wrapper" >
                        <div className="app-header"><h1><span>Маленький</span> <span>"Книжный"</span></h1><span>на самом деле почти любой интернет магазин в теории</span></div>
                        <div className="app-content">
                            <ShopHeader/>
                            <NavBlock/>
                            
                            <Routes>
                                <Route path="/" element={<div>start page</div>}/>
                                <Route path="/home" element={<HomePage/>}/>
                                <Route path="/card" element={<CardPage/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};



export default App


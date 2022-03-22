import React from "react";
import { IBookStoreService } from "../../services/bookstore-services";
const {Provider:BookStProvider,Consumer:BookStConsumer}=React.createContext({} as IBookStoreService);

export {BookStProvider,BookStConsumer};
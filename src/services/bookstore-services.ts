import b1 from "../pictures/b1.jpg"
import b2 from "../pictures/b2.jpg"
import b3 from "../pictures/b3.jpg"

import {TypeBook} from "../reducers/reducer";
export interface IBookStoreService{
    getBooks():Promise<TypeBook[]>
}
export class BookStoreServices implements IBookStoreService {

    data=[
        {id:1, title:"Как сидя на диване стать миллиардером",author:'Евгений Фантазеров',price:14,pathToImg:b1},
        {id:2, title:"Как есть всё и не жиреть",author:'Эдуард Поносов',price:42,pathToImg:b2},
        {id:3, title:"Как открыть свою контору",author:'Анатолий Шарашкин',price:22,pathToImg:b3},
    ]

    getBooks(){
        return new Promise<TypeBook[]>((resolve,reject) => {
            setTimeout(()=>{
                resolve(this.data)
                // if( Math.random()*10>3){return resolve(this.data)}
                // else reject(new Error('all breaked'))
            },1000)
        })
    }
   
}
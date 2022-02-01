import React from "react";
import withBookServ from "../hoc/with-book-serv";

class App extends React.Component{
    
    render(){
      const { bookStServ}=this.props
        console.log(bookStServ.getBooks());
        return (
            <div>'hellow world'</div>
        )
    }
};

export default withBookServ()(App)

// const App =({bookStServ})=>{

//     console.log(bookStServ.getBooks());

//     return (
//         <div>hellow world</div>
//     )
// }
// export default withBookServ()(App)

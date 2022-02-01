import React from "react";
import ErrorView from "../error-view/errorView";
export default class ErrorBound extends React.Component{
    state={
        errorBound:false,
    };

    componentDidCatch(){
        this.setState({errorBound:true}) 
    }

    render(){
        if(this.state.errorBound){
            return <ErrorView/>
        }

        return this.props.children;

    }

};

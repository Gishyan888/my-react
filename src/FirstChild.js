import React from "react";

class FirstChild extends React.Component{
    render(props){
        return(
            <h1>{this.props.text}</h1>
        )
    };
};

export default FirstChild
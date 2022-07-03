import React from "react";

class SecondChild extends React.Component{
    render(props){
        return(
            <h1>{this.props.text}</h1>
        )
    };
};

export default SecondChild
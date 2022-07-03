import React from "react";

class ThirdChild extends React.Component{
    render(props){
        return(
            <h1>{this.props.text}</h1>
        )
    };
};

export default ThirdChild
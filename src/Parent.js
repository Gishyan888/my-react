import React from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

class Parent extends React.Component{
    render(props){
        return(
            <>
            <FirstChild text = "Ավագ"></FirstChild>
            <SecondChild text = "Պավլեն"></SecondChild>
            <ThirdChild text = "Իշխան"></ThirdChild>
            </>
        )
    };
};

export default Parent
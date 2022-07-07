import React from 'react';
import Juice from '../src/FirstProduct/Firstproduct'
import Sweet from './SecondProduct/SecondProduct';
import Burger from './ThirdProduct/ThirdProduct';

class Parent extends React.Component{
    render(props){
        return(
            <>
            <Juice />
            <Sweet />
            <Burger />
            </>
        )
    }
}


export default Parent
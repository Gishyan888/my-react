import React from 'react';
import picture from '../pics/burger.jpg'
import styles from '../ThirdProduct/ThirdProduct.css'

class Burger extends React.Component {
    constructor(props) {
        super()
    }
    state = {
        count: 0
    }
    AddCount = () => {
        this.setState ({
            count: this.state.count + 1        
        })
    };
    DecreaseCount = () => {
        if (0<this.state.count) {
            this.setState ({
                count: this.state.count - 1
            })
        } 
    };
    render(){
        return(
            <div className='block3'>
                <img src={picture}></img>
                <div className='counter3'>               
                    <button onClick={this.DecreaseCount}> - </button>
                    <h4>{this.state.count}</h4>
                    <button onClick={this.AddCount}> + </button>
                </div>
            </div>
        )
    };

};      


export default Burger
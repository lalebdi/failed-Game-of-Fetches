import React, { Component } from 'react'
import axios from 'axios';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            step:1 // By default
        };

    //  Next page method
    nextPage = ( ) => {
        const { step } = this.state;
        this.setState({
            step: step +1
        });
    }

     //  Previos page method
     backPage = ( ) => {
        const { step } = this.state;
        this.setState({
            step: step -1
        });
    }


    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Home

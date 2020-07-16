import React, { Component } from 'react'
import axios from 'axios';

export class Q6 extends Component {
    constructor(props){
        super (props);
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/houses/362')
        .then()
        .catch
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Q6

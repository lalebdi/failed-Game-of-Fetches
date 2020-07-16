import React, { Component } from 'react'
import axios from 'axios';

export class Q2 extends Component {
    constructor(props){
        super (props);
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/houses/378')
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

export default Q2

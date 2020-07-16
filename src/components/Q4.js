import React, { Component } from 'react'
import axios from 'axios';

export class Q4 extends Component {
    constructor(props){
        super (props);
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/houses/17')
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

export default Q4

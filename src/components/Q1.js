import React, { Component } from 'react'
import axios from 'axios';

export class Q1 extends Component {
    constructor(props){
        super (props);
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('http://anapioficeandfire.com/api/characters/16')
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

export default Q1

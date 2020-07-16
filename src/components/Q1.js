import React, { Component } from 'react'
import axios from 'axios';

export class Q1 extends Component {
    constructor(props){
        super (props);
        this.state = {
            answer : []
        }
    }

    componentDidMount(){
        axios.get('http://anapioficeandfire.com/api/characters/16')
        .then(res => this.setState({answer:res.data.born}))
        .catch( err => console.error (err.message) )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Q1

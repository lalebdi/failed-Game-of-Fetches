import React, { Component } from 'react'
import axios from 'axios';

export class Q5 extends Component {
    constructor(props){
        super (props);
        this.state = {
            answer : []
        }
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/characters/901')
        .then(res => this.setState({q1:res.data.aliases[1]}))
        .catch( err => console.error (err.message) )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Q5

import React, { Component } from 'react'
import axios from 'axios';

export class Q7 extends Component {
    constructor(props){
        super (props);
        this.state = {
            answer : []
        }
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/characters/232')
        .then(res => this.setState({q1:res.data.titles}))
        .catch( err => console.error (err.message) )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Q7

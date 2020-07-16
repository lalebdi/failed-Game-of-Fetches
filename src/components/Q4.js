import React, { Component } from 'react'
import axios from 'axios';

export class Q4 extends Component {
    constructor(props){
        super (props);
        this.state = {
            answer : []
        }
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/houses/17')
        .then(res => this.setState({q1:res.data.seats[1]}))
        .catch( err => console.error (err.message) )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Q4

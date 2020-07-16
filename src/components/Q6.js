import React, { Component } from 'react'
import axios from 'axios';

export class Q6 extends Component {
    constructor(props){
        super (props);
        this.state = {
            answer : []
        }
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/houses/362')
        .then(res => this.setState({q1:res.data.founder}))
        .catch( err => console.error (err.message) )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Q6

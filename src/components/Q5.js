import React, { Component } from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
//insert the card import here

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

    continue = e => { // calls nextPage in the Home. this is done by props
        e.preventDefault();
        this.props.nextPage();
    }
    continue = e => { // calls backPage in the Home. this is done by props
        e.preventDefault();
        this.props.backPage();
    }

    render() {
        return (
            <MuiThemeProvider>
               <React.Fragment>
                   
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default Q5

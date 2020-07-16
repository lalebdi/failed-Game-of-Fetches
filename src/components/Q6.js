import React, { Component } from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
//insert the card import here

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

export default Q6

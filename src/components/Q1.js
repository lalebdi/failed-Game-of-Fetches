import React, { Component } from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
//insert the card import here


export class Q1 extends Component {
    constructor(props){
        super (props);
        this.state = {
            answer : []
        }
    }

    continue = e => { // calls nextPage in the Home. this is done by props
        e.preventDefault();
        this.props.nextPage();
    }

    componentDidMount(){
        axios.get('http://anapioficeandfire.com/api/characters/16')
        .then(res => this.setState({answer:res.data.born}))
        .catch( err => console.error (err.message) )
    }

    render() {
        return (
           <MuiThemeProvider>
               <React.Fragment>
               <AppBar title="Game Of Fitches" />


               <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}   
                        onClick ={this.continue}
                    />
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

const styles = { 
    button:{
        margin: 15
    }

}

export default Q1

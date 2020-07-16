import React, { Component } from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// insert the card import here

export class Q2 extends Component {
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
    back = e => { // calls backPage in the Home. this is done by props
        e.preventDefault();
        this.props.backPage();
    }

    componentDidMount(){
        axios.get('http://www.anapioficeandfire.com/api/houses/378')
        .then(res => this.setState({q1:res.data.region}))
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
            <RaisedButton
                        label="Back"
                        primary={true}
                        style={styles.button}   
                        onClick ={this.back}
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

export default Q2

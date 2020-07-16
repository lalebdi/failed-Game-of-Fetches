import React, { Component } from 'react'
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';
import Q7 from './Q7';
import PageNotFound from './PageNotFound';




export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            step:1 // By default
        };

    //  Next page method
    nextPage = ( ) => {
        const { step } = this.state;
        this.setState({
            step: step +1
        });
    }

     //  Previos page method
     backPage = ( ) => {
        const { step } = this.state;
        this.setState({
            step: step -1
        });
    }


    }
    render() {
        const { step }= this.state;
        
        switch(step){
            case 1:
                return(
                    <Q1
                    nextStep = {this.nextPage}
                    />
                );
            case 2:
                return (<Q2
                    nextStep = {this.nextPage}
                    prevStep= {this.backPage}
                        />
                );
            case 3:
                return (<Q3
                    nextStep = {this.nextPage}
                    prevStep= {this.backPage}
                        />
                );
            case 4:
                return (<Q4
                    nextStep = {this.nextPage}
                    prevStep= {this.backPage}
                        />
                        );
            case 5:
                return (<Q5
                    nextStep = {this.nextPage}
                    prevStep= {this.backPage}
                        />
                );
            case 6:
                return (<Q6
                    nextStep = {this.nextPage}
                    prevStep= {this.backPage}
                        />
                        );
            case 7:
                return (<Q7
                    nextStep = {this.nextPage}
                    prevStep= {this.backPage}
                        />
                );
            case 8:
                return <PageNotFound />
        }
}
}

export default Home

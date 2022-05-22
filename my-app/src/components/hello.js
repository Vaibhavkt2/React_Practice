import React from "react";
import propTypes from 'prop-types';
import { Clock } from './clock';


export class Hello extends React.Component{
    constructor(){
        super();
        this.state = {count : 5};
    }

    setCount(new_count) {
        this.setState({count: new_count});
    }

    render() {
        //JSX Code
        return <div>
            <h1>Welcome {this.props.firstName} To React.. Count = {this.state.count}</h1>
            <Clock setCount={this.setCount.bind(this)}></Clock>
        </div>
    }
}

Hello.defaultProps = {firstName: "jerry"};
Hello.propTypes = {
   // "firstName" : propTypes.string
   firstName: function(props, propName, componentName) {
       if(props[propName].length<5)
       return Error('First Name Should Min 5 Char long');
   }
}



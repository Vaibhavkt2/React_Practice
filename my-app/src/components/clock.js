import React from "react";


export class Clock extends React.Component{
    constructor() {
        super();
        this.state = {
            currentTime: new Date().toLocaleString(),
            message: ''
        }
        this.msgRef = React.createRef();
    }
    buttonAction() {
        this.setState({message: this.msgRef.current.value + ', Button Clicked'});
        this.msgRef.current.value = 'Ok Is Clicked';
        this.props.setCount(45);
    }

    render() {
        return <div>
            <h1>{this.state.currentTime}</h1><br></br>
            <h1>{this.state.message}</h1>
            <input type="Button" name= "ok" value= "ok" onClick= {this.buttonAction.bind(this)}/>
            <br></br> <br></br>
            {<input type ="text" ref={this.msgRef}  value="Hello" ></input> }
        </div>
    }
   
    componentDidMount() {
        console.log('Inside  componentDidMount()');
        setInterval(
            () => this.setState({currentTime: new Date().toLocaleString()}),
             1000 );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('inside  shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(' Inside getSnapshotBeforeUpdate(prevProps, prevState)');
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Inside componentDidUpdate(prevProps, prevState)');
    }

    componentWillUnmount() {
        console.log('Inside  componentWillUnmount()');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Inside static getDerivedStateFromProps(nextProps, prevState)');
        return true;
    }
}
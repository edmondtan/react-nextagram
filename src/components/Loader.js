import React, { Component } from 'react';
import axios from 'axios';
import loading from './Spinner.gif';
import HomePage from '../pages/HomePage.js';

class Loader extends Component{
    state = {
        isLoading: false,
    }

componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('https://insta.nextacademy.com/api/v1/users')
  .then(result => {
      this.setState({isLoading: false})
})
    }
render(){
    const { isLoading } = this.state;

    if (isLoading) {
      return <img src={loading} className="load" alt="loading"/>;
    } 
    // return (
    //     isLoading? <img src={loading} className="load"/>: HomePage)
    return HomePage 
}
}
export default Loader
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import HomePage from './pages/HomePage.js';
import UserProfilePage from './pages/UserProfilePage';
import Loader from './components/Loader.js'
import { Route} from "react-router-dom"
import {Navbar1} from "./components/Navbar"
import ShowModel2 from "./components/signupShowModel";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    users: [
            ],
      }
  }
  componentDidMount() {
    // performing a GET request to '/api-end-point'
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      // If successful, we do stuffs with 'result'
    //   console.log(result)
      this.setState({users : result.data})
    })
    .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
    }
  render(){
    // this.state.users.map(element=>{
    //   if(element.id==3){
    //     console.log(element.username)
    //   }
    // })
    // let findobject=this.state.users[3]
    
    // if(this.state.users.length > 0){
    //   console.log(this.state.users[3].username)
    // }

    
    // console.log(this.state.users.forEach((element)=>{element.id}))
    // this.state.users.map(element=>{console.log(element[3])})
    // const result = this.state.users.find( element => element.id === 1 );
    // console.log(result)

  
    return (
      
      <body>
      
  
      <div id="AppPage">
        <Loader/>
        
        <span>
        <Navbar1/>

        {/* <Route exact path="/signup" component={<ShowModel2/>}/> */}
        <Route exact path="/" component={props => <HomePage {...props} users={this.state.users}/>}/>
        <Route path="/account/:identification" render={props => <UserProfilePage {...props} users={this.state.users}/>} />
      </span>

      </div>
      </body>
    )
  }
}

export default App
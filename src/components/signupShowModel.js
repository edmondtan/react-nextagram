import React, { Component } from 'react';
import axios from 'axios';
import {Link,Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ShowModel2 extends React.Component{
    constructor(props){
        super(props)
            this.state={
                username:"",
                email:"",
                password:""
            }
        }
    handleUsernameInput = event => {
        this.setState({ username: event.target.value })    
    }
    handleEmailInput = event => {
        this.setState({email: event.target.value})
    }
    handlePasswordInput = event => {
        this.setState({password: event.target.value})
    }
    
handleSubmit= event =>{
    event.preventDefault()
     axios.post('https://insta.nextacademy.com/api/v1/users/',
        { username: this.state.username,
          email: this.state.email,
          password: this.state.password
        })
      
      .then(response => {
        console.log(response.data.auth_token)
        console.log(response.data.user)
      })
      .catch(error=>{
        console.log(error.response.data.message)
      })
}

    render(){
      return( 
          <body>
      <div class="modal fade" id="ModalCenter2" tabindex="-1" role="dialog" aria-labelledby="ModalCenter2Title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalCenter2Title">Sign Up</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
          <Label for="Username">Username</Label>
          <Input type="username" name="username" id="Username" placeholder="" onChange={this.handleUsernameInput} value={this.state.username} />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="" onChange={this.handleEmailInput} value={this.state.email}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="" onChange={this.handlePasswordInput} value={this.state.password}/>
        </FormGroup>
        
        <div className="lastline">
          Already a member?<Link data-toggle="modal" data-target="#ModalCenter1" data-dismiss="modal">Login</Link> here.
        </div>
            
            <div class="modal-footer"> 
              <button type="submit" class="btn btn-primary" disabled={!(this.state.email.length > 0 &&
          this.state.password.length > 0 && this.state.username.length>0)} onClick={() => { console.log(this.state)}}>Sign Up</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
        </Form></div>
          </div>
        </div>
      </div>
      </body>
          )}
}
export default ShowModel2
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link,Route } from "react-router-dom";
import ShowModel2 from "./signupShowModel";

class ShowModel extends React.Component{
  
    render(){
      return( 
          <body>
      <div class="modal fade" id="ModalCenter1" tabindex="-1" role="dialog" aria-labelledby="ModalCenter1Title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalCenter1Title">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <Form>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="" />
        </FormGroup>
        </Form>
        <div className="lastline">
          New member?<Link data-toggle="modal" data-target="#ModalCenter2" data-dismiss="modal">Sign up</Link> here.
      
        </div>
            </div>
            <div class="modal-footer"> 
              <button type="button" class="btn btn-primary">Log In</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      </body>
          )}
}
export default ShowModel
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link,Route } from "react-router-dom";
import ShowModel from "./loginshowModel";
import ShowModel2 from "./signupShowModel";
const homeUpperHeader=<h1><img src="https://www.asmp.org/colorado/wp-content/uploads/sites/26/2018/06/instagram-logo-A807AD378B-seeklogo.com_.png" width="35" height="35" className="" alt="logo"/> Nextagram</h1>

class Navbar1 extends React.Component{
//   state = {
//     loginOpen: false,
//     signUpOpen: false
// }

// toggleLogin = () => {
//     this.setState({ loginOpen: !this.state.loginOpen })
// }

// toggleSignUp = () => {
//     this.setState({ signUpOpen: !this.state.signUpOpen })
// }

// switchModal = () => {
//     this.toggleLogin();
//     this.toggleSignUp();
// }
render (){
  return(
  <>
    <Link id="home" className="noStyle" to="/">{homeUpperHeader}</Link>
    <div>
        <ShowModel/><ShowModel2/>
        <Button color="primary" class="btn btn-primary" data-toggle="modal" data-target="#ModalCenter1">Log in</Button>{' '}
        
        <Button color="link" class="btn btn-primary" data-toggle="modal" data-target="#ModalCenter2">Sign up</Button>
        
    </div>
</>
)

}
}
export {Navbar1}
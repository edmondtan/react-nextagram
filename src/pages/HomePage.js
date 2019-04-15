import React, { Component } from 'react';
import axios from 'axios';
import UserImages from '../containers/UserImages';
import Image from "react-graceful-image";
import UserProfilePage from './UserProfilePage'
import { Route, Link } from "react-router-dom"


class HomePage extends React.Component{
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     users: [
    // //       {
    // //         id: 1,
    // //         username: "blake",
    // //         profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg"
    // //       },
    // //       {
    // //         id: 2,
    // //         username: "ryanG",
    // //         profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg"
    // //       },
    // //       {
    // //         id: 3,
    // //         username: "bigfan",
    // //         profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png"
    // //       }
    //     ],
    //   }
    // }
    // componentDidMount() {
    //     // performing a GET request to '/api-end-point'
    //     axios.get('https://insta.nextacademy.com/api/v1/users')
    //     .then(result => {
    //       // If successful, we do stuffs with 'result'
    //     //   console.log(result)
    //       this.setState({users : result.data})
    //     })
    //     .catch(error => {
    //         // If unsuccessful, we notify users what went wrong
    //         console.log('ERROR: ', error)
    //       })
    //     }
          
    render(){
        console.log(this.props)
        return(
      
            <div>
                {this.props.users.map((user) =>
                    <div className="profile-section">
                   <Link to= {`/account/${user.id}`} id="username" className="noStyle"><strong>{user.username}</strong></Link>
                
                        
                        <br/>
                        <Image src={user.profileImage} className="profile-pic" alt="Profile" noLazyLoad="true"/>  
                        <br/> 
                        <span id="postedImages"><UserImages id={user.id}/></span>
                        <hr></hr>
                    </div>
                   
                )}
            </div>

        )
    }

}
// const HomePage = props => {
//     return(
//         <div>
//             {props.users.map((user) =>
//                 <div className="profile-section">
//                     <strong>{user.username}</strong><br/>
//                     <img src={user.profileImage} className="profile-pic" alt="Profile"/>   
//                 </div>
//             )}
//         </div>

//     )
// }

export default HomePage
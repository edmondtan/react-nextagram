import React from "react";
import axios from 'axios';
import Image from "react-graceful-image";
import HomePage from './HomePage.js';

class UserProfilePage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

            images: [

            ],
        }
    }
    componentDidMount() {
        // performing a GET request to '/api-end-point'
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.match.params.identification}`)
        .then(result => {
          // If successful, we do stuffs with 'result'
        //   console.log(result)
        this.setState({images: result.data})
        })

        .catch(error => {
            // If unsuccessful, we notify users what went wrong
            console.log('ERROR: ', error)
          })
        }

        

    render(){  
    //  
    // console.log("I am here"+userid)
    // console.log(this.props.match.params.identification)
    const rightid=this.props.match.params.identification

// hello=()=>{
//     if(this.props.users.length > 0) {
//         for(let i=0; i<this.props.users.length; i++){
//             const targetobject=this.props.users[i]
            
//             if(this.props.users.id==rightid){
//             array.push(targetobject.username,
//             targetobject.profileImage)
//             }
//         }
//       }
//     }
           
        return(
            <div>
                {this.props.users.map(element=>{
                    if(element.id==rightid){
                    return(
                        <div> 
                        <h2>{element.username}</h2>  
                        <img src={element.profileImage} className="profile-pic" alt="Profile"/>
                        </div>
                            )
                                            }
                                                            }
                                                    )
                            }


            {this.state.images.map((userPhoto)=>{
            return <span>
                    <Image src={userPhoto} width="350" height="350" alt="user profile images" style={{margin:"10px"}}/>
                </span>
            }
            )}
            </div>
        )
    }
}
export default UserProfilePage
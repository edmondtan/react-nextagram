import React, { Component } from 'react';
import axios from 'axios'
import noPhoto from './no-post.png'
import Image from "react-graceful-image";
  
class UserImages extends Component {
    constructor(props) {
        super(props)
        this.state = {

            images: [

                    ]
        }
    }
    componentDidMount() {
      // performing a GET request
      axios.get(`https://insta.nextacademy.com//api/v1/images?userId=${this.props.id}`)
      .then(result => {
        // If successful, we do stuffs with 'result'
        // console.log(result.data)
        this.setState({images: result.data})
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
    }
    render(){
        if (this.state.images.length===0){ 
                  return <img src={noPhoto} className="noPhoto" alt="noPhoto"/>}
      return(
          this.state.images.map((photo)=>{
              return <Image src={photo} className="postedPhoto" alt="posted" retry={{ count: 5, delay: 2, accumulate: "add"}} />    //noLazyLoad="true"
            }
          )
      )
    }
  }
  export default UserImages
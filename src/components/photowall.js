// this receives all of the post that are going to be passed into it as props

import React from 'react'
import Photo from './photos'



//  USING FUNCTION COMPONENT

function Photowall(props){
        return <div className='photoGrid'> 
                    {props.posts.map((post,index) => <Photo key ={index} post = {post} onremove = {props.onremove}/>)} 
                </div>
}


/* USING CLASS COMPONENT

class Photowall extends Component{

        render() {

                return <div className='photoGrid'> 
                    {this.props.posts.map((post,index) => <Photo key ={index} post = {post}/>)} 
                </div>

        }
}


// from photowall instance we are passing an array as props and mapping over that array inside of photowall class 
// array of posts is being iterated and mapped out to create new photo component instances and return in our photowall render method
// for each post that generating a photo instance the instance will pass that post as a prop such that photo instance 
// photo instance is defined to render out an figure that comes from post link that was just passed in 
 */
export default Photowall


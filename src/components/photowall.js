// this receives all of the post that are going to be passed into it as props

import React, {Component} from 'react'
import Photo from './photos'

class Photowall extends Component{

        render() {

                return <div className='photoGrid'> 
                    {this.props.posts.map((post,index) => <Photo key ={index} post = {post}/>)}
                </div>

        }
}


export default Photowall
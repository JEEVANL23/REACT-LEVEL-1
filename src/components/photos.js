import React from 'react';

 function Photo(props){

    const post = props.post
        return <figure className='figure'> 

            <img className='photo' src ={post.imageLink} alt = {post.description} />
            <figcaption> <p> {post.description }</p></figcaption>
            <div className='button-container'> 
            <button className='remove-button'> Remove </button>
            </div>

        </figure>       /* self contained content  */

    }

/*
class Photo extends Component{

    render(){

        const post = this.props.post
        return <figure className='figure'> 

            <img className='photo' src ={post.imageLink} alt = {post.description} />
            <figcaption> <p> {post.description }</p></figcaption>
            <div className='button-container'> 
            <button className='remove-button'> Remove </button>
            </div>

        </figure>       /* self contained content  */

    // }
    // }

// figure contains image URL according to post that we passes in with the post description as caption
// figure is being modified in stylesheet 
// if images fails to load , description will be displayed

export default Photo
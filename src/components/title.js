import React from 'react';


// using function component
function Titlecontent(props) {
 
    return <h1> {props.title} </h1>  
}

/*  USING CLASS COMPONENT

class Titlecontent extends Component{
    render() {
        return <h1> {this.props.title} </h1>  
    }
}

*/
export default Titlecontent
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import './style/stylesheet.css'

ReactDOM.render(<Main/>,document.getElementById('root'));

// NORMAL METHOD
// const name = ['hello im jeevan','hello im jaideep', 'hello im jeevans friend'];
/*
const element = React.createElement('h1',null, 'hello world'); // element that we want to display, if no props is there use null
const element1 = React.createElement('p', null, " this is second hello world");
const element2 = React.createElement('strong', null, " this is second hello world");
const element3 = React.createElement('ol', null, task.map((task,index) => React.createElement('li',{key :index}, task)));
/* this is ordered list instead of array

const element3 = React.createElement('ol', null, 
React.createElement('li',null, 'hello im jeevan'),
React.createElement('li',null, 'hello im jaiddep'),
React.createElement('li',null, 'hello im jeevans friend'));
*/
// h1 for header, p for paragraph, strong for bold, ol for ordered and ul for unordered list
/*const element4 = <div>
                <h1>Task List</h1>
                <ol>{ task.map((task,index) => <li key = {index} > {task} </li>)} </ol>
                </div>

*/
// {name.map((name,index) => <li key = {index}> {name} </li>)}
/*
ReactDOM.render(element, document.getElementById('root'));    // rendering the content by dom node 'root'
ReactDOM.render(element1,document.getElementById('root'));
ReactDOM.render(element2,document.getElementById('root'));
ReactDOM.render(element3,document.getElementById('root'));
ReactDOM.render(element4,document.getElementById('root'));
*/


// USING CLASS COMPONENT
/*
class Listcontent extends Component {
        render(){
            return( <ol>
                        {this.props.task.map((task,index) => <li key = {index}> {task} </li>)}
                </ol> )
        }
}
class Titlecontent extends Component{
    render() {
        return <h1> {this.props.title} </h1>  
    }
}
class Main extends Component{
    render(){
        return <div>
            <Titlecontent title = {'to do'}/>
            <Listcontent task = {['jeevan','jaideep']}/>  
            <Listcontent task = {['hello','world']}/>
        </div>
    }
}          // same component different data from the props 
ReactDOM.render(<Main/>,document.getElementById('root'));

*/


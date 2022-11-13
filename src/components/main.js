import React,{Component} from "react";
import Titlecontent from "./title";
import Photowall from "./photowall";

/*
const posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    },{
    id: "3",
    description: "Aliens???",
    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    
    }]


/*USING stateless FUNCTION COMPONENT
function Main(props) {
    return  <div>

    <Titlecontent title = {'Photowall'}/>
    <Photowall posts = {posts}/>    
        
            </div>   
}
*/

// USING CLASS COMPONENT
class Main extends Component{

    constructor(){

            super()
            this.state = {
                posts : [{
                    id: "0",
                    description: "beautiful landscape",
                    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
                    }, {
                    id: "1",
                    description: "Aliens???",
                    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
                    }, {
                    id: "2",
                    description: "On a vacation!",
                    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                    },{
                    id: "3",
                    description: "Aliens???",
                    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
                    
                    }]
                
            }

            this.removephoto = this.removephoto.bind(this);

    }

removephoto(postremoved){

        console.log(postremoved.description);
        this.setState((state) => ({

                posts: state.posts.filter(post => post !== postremoved)
        })
        
        )

}

    render(){
        return <div>
            <Titlecontent title = {'Photowall'}/>
            <Photowall posts = {this.state.posts} onremove = {this.removephoto}/>    
        </div>
    }
}          // photowall instance passes an array of data named post

// in main.js , main component renders both title and photowall instances

// from photowall instance we are passin an array as props and mapping over that array inside of photowall class 


export default Main
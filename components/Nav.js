import { renderers } from "react-markdown";
import React, { Component } from 'react';
// Site Navigation menu
// https://www.sitepoint.com/responsive-fluid-width-variable-item-navigation-css/
// https://www.w3schools.com/Css/css_navbar.asp




const apiKey = 'c5f07ab7f7f14588935ccd0a84537520';


 class Nav extends Component{

    constructor(props) {
        super(props);
    
        this.state = {};
      }



    searchNewsAPI = (event) => {
        // set state values - this will trigger an update and componentDidUpdate
        this.setState({
          // Get the link text
          newsSource: `${event.target.innerText}`,
          // Build the search URL using the link name
          url: `https://newsapi.org/v2/${event.target.name}&apiKey=${apiKey}`
        })
        console.log(this.state.url);
      }

render() {
return(


       <nav className = ".center">
           
        <ul className="newsMenu">
          <li><a href="/">Home</a> </li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?catagory=business">Business</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?category=sport">Sport </a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?category=technology">Technology</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?category=science">Science</a></li>
         </ul>
          
       
        {/* Define css for this page or component */}
       {/* Note back ticks `` surrounding css are required */}
       <style jsx>{`
        nav {
            border: 1px solid #ccc;
            border-right: none;
            width:  100%;
            margin: auto;
          
        }

        .center{
           

        }

        nav ul {
            
            list-style-type: none;
            margin: 0;
            text-align:center;
            padding: 0;
            overflow: hidden;
            background-color: #333;
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;
            float:center;
        }

        nav ul li {
           float:left;
           
      
        }

        nav ul li:first-child {
          
        }

        nav ul li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        nav ul li:hover {
            background: black;
        }
        nav ul li a:hover {
            color: white;
        }

        

        `}</style>
 
</nav>    
);
   
}
 }

export default Nav;













// <ul className="newsMenu">
       
//           <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?country=ie">Top Headlines Ireland</a></li>
//           <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?country=ie&category=business">Business News Ireland</a></li>
//           <li><a href="#" onClick={this.searchNewsAPI} name="everything?q=technology">Technology News</a></li>
//           <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?country=ie&category=weather">Weather in Ireland</a></li>
//         </ul>

  






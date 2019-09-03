import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts"
import {Route,Link } from "react-router-dom"
import NewPost from "./NewPost/NewPost";
class Blog extends Component {

  render() {
    return (
      <div>
        <header className="Blog"><ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to={{
            pathname:"new-post",
          hash:"#submit",
          search:"?anand?awsad"
          }}>NewPost</Link></li>
          </ul></header>
          <Route exact path="/" component={Posts} />
          <Route path="/new-post" component={NewPost}/>
      </div>
    );
  }
}

export default Blog;

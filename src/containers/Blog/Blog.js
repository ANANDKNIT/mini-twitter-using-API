import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts"
import {Route } from "react-router-dom"
import NewPost from "./NewPost/NewPost";
class Blog extends Component {

  render() {
    return (
      <div>
        <header className="Blog"><ul>
          <li><a href="/"> Home</a></li>
          <li><a href="/new-post">NewPost</a></li>
          </ul></header>
          <Route exact path="/" component={Posts} />
          <Route path="/new-post" component={NewPost}/>
      </div>
    );
  }
}

export default Blog;

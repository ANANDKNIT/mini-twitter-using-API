import React, { Component } from "react";
import "./Blog.css";
// import Posts from "./Posts/Posts"
import {Route } from "react-router-dom"
class Blog extends Component {

  render() {
    return (
      <div>
        <header className="Blog"><ul>
          <li><a href="/"> Home</a></li>
          <li><a href="/new-post">NewPost</a></li>
          </ul></header>
          <Route exact path="/" render={()=><h1>Home</h1>} />
          <Route path="/" render={()=><h1>Home2</h1>} />

      </div>
    );
  }
}

export default Blog;

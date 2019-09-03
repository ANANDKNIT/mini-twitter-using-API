import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <ul>
            <li>
              <NavLink to="/" exact>
                {"Home"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "new-post",
                  hash: "#submit",
                  search: "?anand?awsad",
                }}
                activeStyle={{color:"orange"}}
                activeClassName="custom-class"
                
              >
                {"NewPost"}
              </NavLink>
            </li>
          </ul>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;

import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";
import asyComponent from "../../components/hoc/asyComponent";
const AsyComponent = asyComponent(() => {
  return import("./FullPost/FullPost");
});

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <ul>
            <li>
              <NavLink to="/" exact>
                {"Posts"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "new-post",
                  hash: "#submit",
                  search: "?anand?awsad"
                }}
                activeStyle={{ color: "orange" }}
                activeClassName="custom-class"
                exact
              >
                {"NewPost"}
              </NavLink>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={AsyComponent} />
        </Switch>
      </div>
    );
  }
}

export default Blog;

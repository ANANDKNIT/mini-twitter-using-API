import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";
import { withRouter } from "react-router";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        this.props.match.params.id !== this.state.loadedPost.id
      ) {
        axios.get("/posts/" + this.props.match.params.id).then(response => {
          console.log(response.data, "full post didUpdate");
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHandler = id => {
    axios.delete("/posts/" + id).then(response => {
      console.log(response);
      this.props.history.push("/");
    });
  };
  render() {
    const { loadedPost } = this.state;

    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>loading....</p>;
    }

    if (loadedPost) {
      console.log(loadedPost, "render Data");
      return (
        <div className="FullPost">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={() => this.deletePostHandler(loadedPost.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default withRouter(FullPost);

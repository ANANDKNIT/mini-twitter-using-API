import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidUpdate() {
    if (this.props.id) {
      if ( !this.state.loadedPost || (this.props.id !== this.state.loadedPost.id)) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then(response => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }
deletePostHandler=(id) => {
axios.delete("https://jsonplaceholder.typicode.com/posts/"+id).then(response=>{
  console.log(response)
})
}
  render() {
    const {loadedPost} = this.state;

    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>loading....</p>;
    }
    if (loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={()=>this.deletePostHandler(loadedPost.id)}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;

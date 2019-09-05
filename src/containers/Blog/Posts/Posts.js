import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    error: null
  };

  componentDidMount() {
    //     const ApiData= axios.get("https://jsonplaceholder.typicode.com/posts");
    //the above code will not give the correct result because it will execute the method immediately so to avoid this use promises
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 6);
        const updatedData = posts.map(post => {
          return {
            ...post,
            author: "Anand"
          };
        });
        console.log(updatedData);
        this.setState({ posts: updatedData });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    console.log(id);
    // this.setState({ selectedPostId: id });
    this.props.history.push("/" + id);
  };

  render() {
    let posts;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    } else {
      posts = <p>Something Went Wrong</p>;
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;

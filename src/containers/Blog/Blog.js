import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    //     const ApiData= axios.get("https://jsonplaceholder.typicode.com/posts"); //this will not give the correct result because it will execute the method immediately so use promises
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        const posts=response.data.slice(0,6);
        console.log(posts)
    const updatedData =posts.map(post=>{
        return {
            ...post,
            author: "Anand"
        }
    })

    this.setState({ posts: updatedData });
      console.log(updatedData);
    });
  }
  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author}/>;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
